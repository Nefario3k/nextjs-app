const getFullName = function (fname, lname) {
    if (!fname && !lname) return "Nil";
    return fname + " " + lname;
};

const formatNaira = function (num) {
    if (num === null) return "Nil";
    const formatter = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    });
    return formatter.format(num);
}

export default { getFullName, formatNaira }