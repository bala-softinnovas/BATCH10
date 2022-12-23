public with sharing class ContactCtrl {
    @AuraEnabled
    public static List<Contact> getMatchingContacts(String searchKey) { //ab
        searchKey = '%' + searchKey + '%';
        return [SELECT FirstName, LastName, Title, Department
                FROM Contact
                WHERE FirstName LIKE :searchKey
                OR LastName LIKE :searchKey
                WITH SECURITY_ENFORCED];
    }
}
