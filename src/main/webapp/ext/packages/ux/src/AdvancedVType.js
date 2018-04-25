Ext.define('Ext.ux.AdvancedVType', {
    override: 'Ext.form.field.VTypes',
    
    daterange: function(val, field) {
        var date = field.parseDate(val);

        if (!date) {
            return false;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = field.up('form').getForm().findField(field.startDateField);
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = field.up('form').getForm().findField(field.endDateField);
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    },

    daterangeText: '开始日期不能大于结束日期',

    datetimerange: function(val, field) {
        var date = field.parseDate(val);

        if (!date) {
            return false;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = field.up('form').getForm().findField(field.startDateField);
            start.setMaxValue(date);
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = field.up('form').getForm().findField(field.endDateField);
            end.setMinValue(date);
            this.dateRangeMin = date;
        }
        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    },

    datetimerangeText: '开始日期不能大于结束日期',

    password: function(val, field) {
        if (field.initialPassField) {
            var pwd = field.up('form').getForm().findField(field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },

    passwordText: '密码不匹配',

    complex: function (val,field) {
        if(val==""){
            return true;
        }else{
            var regxs = new Array();//定义一个数组用于存放不同的正则表达式
            regxs[0]=/[^a-zA-Z0-9_]/g;
            regxs[1]=/[a-z]/g;
            regxs[2]=/[0-9]/g;
            regxs[3]=/[A-Z]/g;
            var len = val.length;//获取用户输入的密码长度
            var sec = 0;         //定义一个变量用于存放密码强度
            if (len >= 6) {//用于判断用户输入的密码强度
                // 至少六个字符
                for (var i = 0; i < regxs.length; i++){ //遍历所有正则表达式，检测用户输入的密码符合哪些正则表达式，如果符合则强度+1
                    if (val.match(regxs[i])){
                        sec++;
                    }
                }
            }
            if(sec>1){
                return true;
            }
            return false;
        }
    },
    complexText: '密码强度太弱'
});