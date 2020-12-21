({
    
    fireBookNowEvent : function(component,event,helper){
        
        let bookNow = component.getEvent("bookNowEvent");
        bookNow.setParams({
            "contact": component.get("v.contact")
        })
        bookNow.fire();
    },
    
    navigate : function(component,event,helper){
        let recordId = component.get("v.contact.Id");
        let navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : recordId 
        });
        navEvt.fire();
    }
})