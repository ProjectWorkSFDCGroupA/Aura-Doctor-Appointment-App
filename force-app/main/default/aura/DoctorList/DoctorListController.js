({
    doInit : function(component, event, helper) {
        var spinner = component.find("spinner");
        $A.util.removeClass(spinner, "slds-hide");
        let action = component.get('c.getDoctors');
        helper.getRecords(component,action,event);
    },
    
    onChange : function(component,event, helper){
        var spinner = component.find("spinner");
        $A.util.removeClass(spinner, "slds-hide");
        let action = component.get('c.getFilteredRecord');
        helper.getRecords(component,action,event);
    },
   
    
    handleBookNowEvent : function(component, event, helper) {
        
        var contactObj = event.getParam("contact");
        component.set("v.selectedContact", contactObj);
        component.set("v.isOpen", true);
    }
    
})