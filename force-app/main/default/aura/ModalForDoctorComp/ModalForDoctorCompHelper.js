({
    
    createAppointment : function(component){
        
        component.set("v.isOpen",false);
        this.showSuccessToast();
        
    },
    
    showSuccessToast : function(){
        
        let resultToast = $A.get("e.force:showToast");
        resultToast.setParams({
            
            "title": "Congrats!",
            "message": "Your Appointment has been booked successfully",
            "mode": "pester",
            "type": "success",
            "duration": "2500"
        });
        resultToast.fire();
    }  
})