public with sharing class OpportunityCtrl {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getMatchingOpps(String stage) {
        return [SELECT Name, Type, StageName, Amount
                FROM Opportunity
                WHERE StageName = :stage
                WITH SECURITY_ENFORCED
                ORDER BY Amount DESC
                LIMIT 5];
    }

    @AuraEnabled 
    public static Decimal getTotalAmount(String stage) {
        Decimal total = 0;
        for(Opportunity opp : [SELECT Id, Amount FROM Opportunity WHERE StageName = :stage AND Amount != null]) {
            total = total + opp.Amount;
        }
        return total;
    }
}
