var weeks = ["日","一","二","三","四","五","六"],
    today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth()+1,
    week = today.getDay(),
    date = today.getDate();
    time = year + "年" + month + "月" + date +"日" +" 星期"+weeks[week];
document.write(time);