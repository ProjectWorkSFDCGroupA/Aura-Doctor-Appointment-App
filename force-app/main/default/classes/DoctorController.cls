public class DoctorController {
    
    @AuraEnabled
    public static List<Contact> getDoctors(boolean filter1, String filter2, String filter3,String filter4, String filter5){
        return [select name, department, consultation_fees__c, phone,Years_Of_Experience__c, availability__c, gender__c, mailingStreet,mailingCountry, mailingCity, picture_url__c, Account.Name from contact where Years_Of_Experience__c!=null limit 10];
    }
    
    @AuraEnabled
    public static List<Contact> getFilteredRecord(boolean filter1,String filter2, String filter3, String filter4, String filter5){ 
      
      	String order = '';
        Decimal upperRange = 0;
        Decimal lowerRange = 0;
        
        if(filter5==''){
            upperRange = 10000.00;
            lowerRange = 0;
        }
        
        else if(filter5=='stage1'){
            
            lowerRange = 1.00;
            upperRange = 200.00;
            
        }else if(filter5=='stage2'){
            
            lowerRange = 201.00;
            upperRange = 500.00;
            
        }else if(filter5=='stage3'){
            
            lowerRange = 501.00;
            upperRange = 1000.00;
        }
        
        
        if(filter3=='lowToHigh'){
            order = 'order by consultation_fees__c asc ';
        }else if(filter3 == 'highToLow'){
            order = 'order by consultation_fees__c desc ';
        }
   		
        
        String query = 'select name,department,consultation_fees__c,phone,availability__c,gender__c,Years_Of_Experience__c,mailingStreet,mailingCountry,picture_url__c,Account.Name from contact where consultation_fees__c != null and ';
        
        List<Contact> results = new List<Contact>();
        
        
        if(filter1 == true){
            query = query + 'availability__c like \''+filter2+'\' and video_Consultation__c = true and gender__c like \''+filter4+'\' and consultation_fees__c >= '+lowerRange+' and consultation_fees__c <= '+upperRange+' '+order+'limit 10';
            results = Database.query(query);
            
        }else if(filter1 == false){
            query = query + 'availability__c like \''+filter2+'\' and gender__c like \''+filter4+'\' and consultation_fees__c >= '+lowerRange+' and consultation_fees__c <= '+upperRange+' '+order+'limit 10';
            results = Database.query(query);
        }
        else{
            results = [select name,department,consultation_fees__c,phone,availability__c,gender__c,mailingStreet,mailingCountry,Years_Of_Experience__c,picture_url__c,Account.Name from contact where Years_Of_Experience__c!=null order by Years_Of_Experience__c limit 10];
        }
        
        return results;
    }
}