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

    password: function(val, field) {
        if (field.initialPassField) {
            var pwd = field.up('form').getForm().findField(field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },

    passwordText: '密码不匹配'
});