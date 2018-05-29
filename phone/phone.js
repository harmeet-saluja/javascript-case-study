function PhoneNumber(phoneNumber) {
    this.number = function () {
        var newPhoneNumber = phoneNumber.replace(/[^A-Z0-9]+/ig, "");
        if ((newPhoneNumber.length == 9) || (newPhoneNumber.length >= 11 && newPhoneNumber.charAt(0) != '1'))
            return null;

        if (newPhoneNumber.charAt(0) == '1') {
            newPhoneNumber = newPhoneNumber.slice(1);
        }
        return newPhoneNumber;
    }
}

module.exports = PhoneNumber;
