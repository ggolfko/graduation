'use strict'
const date = [
    '🎓 26 Sep. ถ่ายรูปรวม @PSU Phuket',
    '🎓 27 Sep. ซ้อมย่อย @PSU Hatyai',
    '🎓 29 Sep. ซ้อมใหญ่ ณ ศูนย์ประชุมนานาชาติ @PSU Hatyai',
    '🎓 30 Sep. รับพระราชทานปริญญาบัตร (รับจริง) ณ ศูนย์ประชุมนานาชาติ @PSU Hatyai',
    ' เรียนเชิญทุกคนมาถ่ายรูปกันนะครับ'
]
let getRehearsal = (day) => {
    return new Promise((resolve, reject) => {
        if (day === 27) resolve(date[1])
        else if (day === 29) resolve(date[2])
        else resolve(date[0])
    })
}
let getCommencement = (day) => {
    return new Promise((resolve, reject) => {
        resolve(date[3])
    })
}
let postInvite = () => {
    return new Promise((resolve, reject) => {
        resolve(date[4])
    })
}
function Graduation() {
    postInvite().then((res) => {
        console.log(res)
        return getRehearsal(26)
    }).then((res) => {
        console.log(res)
        return getRehearsal(27)
    }).then((res) => {
        console.log(res)
        return getRehearsal(29)
    }).then((res) => {
        console.log(res)
        return getCommencement(2)
    }).then((res) => {
        console.log(res)
    }).catch((err) =>{
        console.log(err)
    })
}
Graduation();