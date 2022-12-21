public with sharing class LeadCtrl {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getRecentLeads() {
        return [SELECT FirstName, LastName, Title, Company
                FROM Lead
                WHERE Title != NULL
                AND Company != NULL
                ORDER BY CreatedDate DESC
                LIMIT 4];
    }
}
