#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;
use ink_storage::collections::HashMap;
use ink_storage::traits::SpreadLayout;
use ink_env::hash::{Hash, Blake2x256, CryptoHash};

#[derive(Debug, SpreadLayout, Clone)]
pub struct Email {
    from: AccountId,
    to: AccountId,
    subject: String,
    content: String,
    timestamp: u64,
    read: bool,
    encrypted: bool,
    hash: Hash,
}

#[ink::contract]
pub mod email_contract {
    use super::*;
    use ink_storage::collections::HashMap as StorageHashMap;
    use ink_env::hash::Blake2x256;

    #[ink(storage)]
    pub struct EmailContract {
        inboxes: StorageHashMap<AccountId, Vec<Email>>,
        sent: StorageHashMap<AccountId, Vec<Email>>,
        spam_filters: StorageHashMap<AccountId, Vec<AccountId>>,
        max_emails_per_user: u32,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        EmailNotFound,
        InvalidIndex,
        SpamDetected,
        MaxEmailsReached,
        InvalidRecipient,
    }

    pub type Result<T> = core::result::Result<T, Error>;

    impl EmailContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                inboxes: StorageHashMap::new(),
                sent: StorageHashMap::new(),
                spam_filters: StorageHashMap::new(),
                max_emails_per_user: 1000,
            }
        }

        #[ink(message)]
        pub fn send_email(&mut self, to: AccountId, subject: String, content: String) -> Result<bool> {
            let from = self.env().caller();
            
            // Verifica se o destinatário está na lista de spam
            if let Some(spam_list) = self.spam_filters.get(&to) {
                if spam_list.contains(&from) {
                    return Err(Error::SpamDetected);
                }
            }

            // Verifica limite de e-mails
            if let Some(inbox) = self.inboxes.get(&to) {
                if inbox.len() >= self.max_emails_per_user as usize {
                    return Err(Error::MaxEmailsReached);
                }
            }

            let timestamp = self.env().block_timestamp();
            
            // Calcula o hash do conteúdo para verificação de integridade
            let mut hasher = Blake2x256::default();
            hasher.hash(content.as_bytes());
            let content_hash = hasher.finalize();

            let email = Email {
                from,
                to,
                subject,
                content,
                timestamp,
                read: false,
                encrypted: false,
                hash: content_hash,
            };

            // Adiciona ao inbox do destinatário
            let recipient_inbox = self.inboxes.entry(to).or_insert_with(Vec::new);
            recipient_inbox.push(email.clone());

            // Adiciona aos enviados do remetente
            let sender_sent = self.sent.entry(from).or_insert_with(Vec::new);
            sender_sent.push(email);

            Ok(true)
        }

        #[ink(message)]
        pub fn get_inbox(&self, account: AccountId) -> Vec<Email> {
            self.inboxes.get(&account).cloned().unwrap_or_default()
        }

        #[ink(message)]
        pub fn get_sent(&self, account: AccountId) -> Vec<Email> {
            self.sent.get(&account).cloned().unwrap_or_default()
        }

        #[ink(message)]
        pub fn mark_as_read(&mut self, index: u32) -> Result<bool> {
            let account = self.env().caller();
            if let Some(inbox) = self.inboxes.get_mut(&account) {
                if let Some(email) = inbox.get_mut(index as usize) {
                    email.read = true;
                    return Ok(true);
                }
            }
            Err(Error::EmailNotFound)
        }

        #[ink(message)]
        pub fn delete_email(&mut self, index: u32) -> Result<bool> {
            let account = self.env().caller();
            if let Some(inbox) = self.inboxes.get_mut(&account) {
                if index < inbox.len() as u32 {
                    inbox.remove(index as usize);
                    return Ok(true);
                }
            }
            Err(Error::InvalidIndex)
        }

        #[ink(message)]
        pub fn add_to_spam(&mut self, spammer: AccountId) -> bool {
            let account = self.env().caller();
            let spam_list = self.spam_filters.entry(account).or_insert_with(Vec::new);
            if !spam_list.contains(&spammer) {
                spam_list.push(spammer);
                true
            } else {
                false
            }
        }

        #[ink(message)]
        pub fn remove_from_spam(&mut self, address: AccountId) -> bool {
            let account = self.env().caller();
            if let Some(spam_list) = self.spam_filters.get_mut(&account) {
                if let Some(pos) = spam_list.iter().position(|x| *x == address) {
                    spam_list.remove(pos);
                    true
                } else {
                    false
                }
            } else {
                false
            }
        }

        #[ink(message)]
        pub fn get_spam_list(&self, account: AccountId) -> Vec<AccountId> {
            self.spam_filters.get(&account).cloned().unwrap_or_default()
        }

        #[ink(message)]
        pub fn verify_email_integrity(&self, account: AccountId, index: u32) -> Result<bool> {
            let inbox = self.inboxes.get(&account).ok_or(Error::EmailNotFound)?;
            let email = inbox.get(index as usize).ok_or(Error::InvalidIndex)?;
            
            let mut hasher = Blake2x256::default();
            hasher.hash(email.content.as_bytes());
            let current_hash = hasher.finalize();
            
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;
use ink_storage::collections::HashMap;
use ink_storage::traits::SpreadLayout;
use ink_env::hash::{Hash, Blake2x256, CryptoHash};

#[derive(Debug, SpreadLayout)]
pub struct Email {
    from: AccountId,
    to: AccountId,
    subject: String,
    content: String,
    timestamp: u64,
    read: bool,
}

#[ink::contract]
pub mod email_contract {
    use super::*;
    use ink_storage::collections::HashMap as StorageHashMap;

    #[ink(storage)]
    pub struct EmailContract {
        inboxes: StorageHashMap<AccountId, Vec<Email>>,
        sent: StorageHashMap<AccountId, Vec<Email>>,
    }

    impl EmailContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                inboxes: StorageHashMap::new(),
                sent: StorageHashMap::new(),
            }
        }

        #[ink(message)]
        pub fn send_email(&mut self, to: AccountId, subject: String, content: String) -> bool {
            let from = self.env().caller();
            let timestamp = self.env().block_timestamp();

            let email = Email {
                from,
                to,
                subject,
                content,
                timestamp,
                read: false,
            };

            // Adiciona ao inbox do destinatário
            let recipient_inbox = self.inboxes.entry(to).or_insert_with(Vec::new);
            recipient_inbox.push(email.clone());

            // Adiciona aos enviados do remetente
            let sender_sent = self.sent.entry(from).or_insert_with(Vec::new);
            sender_sent.push(email);

            true
        }

        #[ink(message)]
        pub fn get_inbox(&self, account: AccountId) -> Vec<Email> {
            self.inboxes.get(&account).cloned().unwrap_or_default()
        }

        #[ink(message)]
        pub fn get_sent(&self, account: AccountId) -> Vec<Email> {
            self.sent.get(&account).cloned().unwrap_or_default()
        }

        #[ink(message)]
        pub fn mark_as_read(&mut self, index: u32) -> bool {
            let account = self.env().caller();
            if let Some(inbox) = self.inboxes.get_mut(&account) {
                if let Some(email) = inbox.get_mut(index as usize) {
                    email.read = true;
                    return true;
                }
            }
            false
        }

        #[ink(message)]
        pub fn delete_email(&mut self, index: u32) -> bool {
            let account = self.env().caller();
            if let Some(inbox) = self.inboxes.get_mut(&account) {
                if index < inbox.len() as u32 {
                    inbox.remove(index as usize);
                    return true;
                }
            }
            false
        }
    }
} 