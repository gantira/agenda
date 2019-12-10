import Vue from 'vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.filter('moment', function (value) {
    moment.locale('id');
    if (value) {
        return moment(String(value)).format('MMMM Do YYYY');
    }
});