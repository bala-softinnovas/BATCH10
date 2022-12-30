public with sharing class CslookupCtrl {
    public static List<SObject> getRecords(String objectName, String searchKey) {
        searchKey = '%' + searchKey + '%';
        String query = 'SELECT Id, Name FROM ' + objectName + ' WHERE Name LIKE ' + searchKey;
        return Database.query(query);
    }
}
