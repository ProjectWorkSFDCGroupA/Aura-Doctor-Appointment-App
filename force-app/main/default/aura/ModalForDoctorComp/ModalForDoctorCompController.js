({
    closeModal: function(component, event, helper) {
        
        component.set("v.isOpen", false);
    },
    
    doInit : function(component, event, helper) {
        
        component.set("v.isOpen", true);
        var contactObj = component.get("v.contact");
        var doctorInputComponent = component.find("doctorField");
        doctorInputComponent.set("v.value", contactObj.Id);
    },
    
    confirmAppointment: function(component, event, helper) {
        
        helper.createAppointment(component);
    }
    
})