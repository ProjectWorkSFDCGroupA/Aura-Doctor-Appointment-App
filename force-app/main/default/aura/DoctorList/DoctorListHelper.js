({
    getRecords : function(component,action) {
        
        let filterCheckBox =  component.get('v.videoConsultation');
        let filterAvailability = component.get('v.selectedAvailability');
        let filterPriceRange = component.get('v.selectedSort');
        let filterGender = component.get('v.selectedGender');
        let filterFees = component.get('v.selectedFees');
        
        action.setParams({
            
            'filter1' : filterCheckBox,
            'filter2' : filterAvailability,
            'filter3' : filterPriceRange,
            'filter4' : filterGender,
            'filter5' : filterFees
            
        });
        
        action.setCallback(this, function(response){
            
            if(response.getState()=='SUCCESS'){
                
                component.set('v.contacts',response.getReturnValue());
                var spinner = component.find("spinner");
                $A.util.addClass(spinner, "slds-hide");
            }
            
        });
        
        $A.enqueueAction(action);
    }
})