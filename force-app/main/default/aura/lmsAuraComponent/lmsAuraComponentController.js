({
    handleMessage : function(component, message) {
        if(message != null && message.getParam("lmsData") != null) {
            component.set("v.messageReceived", message.getParam("lmsData").value);
        }
    },

    handleChange : function(component, event) {
        let data = event.target.value;
        component.set("v.messageValue", data);
    },

    publishHandler : function(component) {
        let message = {
            lmsData: {
                value: component.get("v.messageValue")
            }
        };
        component.find("SampleMessageChannel").publish(message);
    }
})
