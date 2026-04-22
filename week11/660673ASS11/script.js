// ฟังก์ชันสำหรับแสดงผลบนหน้าเว็บ (แก้ให้รับค่าได้ตัวเดียวตามที่ใช้จริง)
function display(text) {
    document.getElementById('result').innerText = text;
}

// --- ข้อที่ 1 ---
function task1() {
    let fruits = ["ส้ม", "มะม่วง", "ลำไย"];
    fruits.push("แตงโม");    
    fruits.unshift("แอปเปิ้ล");  
    display("ข้อ 1 ผลลัพธ์ Array: " + JSON.stringify(fruits));
}

// --- ข้อที่ 2 ---
function task2() {
    const employees = [
        { name: "กรภัทร", job: "นักบิน", salary: 150000 },
        { name: "จารวี", job: "มัณฑนากร", salary: 55000 },
        { name: "นารีรัตน์", job: "นักวิเคราะห์ระบบ", salary: 45000 },
        { name: "ภริตา", job: "พยาบาล", salary: 35000 },
        { name: "รลิตา", job: "แพทย์", salary: 75000 }
    ];
    const highIncomeNames = employees
        .filter(emp => emp.salary >= 50000) 
        .map(emp => emp.name);               
    display("ข้อ 2 รายชื่อพนักงานเงินเดือน 50k+: " + highIncomeNames.join(", "));
}

// --- ข้อที่ 3 ---
function task3() {
    let data = ["Avocado", "Banana", "Coconut", "Durian", "Kiwi"];
    data.splice(1, 2, "Lemon");
    display("ข้อ 3 Array หลังใช้ Splice: " + JSON.stringify(data));
}

// --- ข้อที่ 4 ---
function task4() {
    const scores = [70, 5, 75, 10, 80, 95, 25, 30, 15, 45];
    let results = [];
    for (let i = 0; i < scores.length; i++) {
        results.push(scores[i] + (scores[i] >= 50 ? ": ผ่าน" : ": ไม่ผ่าน"));
    }
    display("ข้อ 4 ผลสอบ:\n" + results.join("\n"));
}

// --- ข้อที่ 5 (ย้าย Class มาไว้นอกฟังก์ชันเป็นโครงสร้างหลัก) ---
class Student {
    constructor(stdID, stdName, dept, fac) {
        this.stdID = stdID;
        this.stdName = stdName;
        this.dept = dept;
        this.fac = fac;
    }

    study() {
        return "นักศึกษากำลังเรียน";
    }
}

function task5() {
    let student1 = new Student(
        "660001",
        "กิตติ",
        "วิทยาการคอมพิวเตอร์",
        "วิทยาศาสตร์และเทคโนโลยี"
    );

    let result =
        "รหัส: " + student1.stdID + "\n" +
        "ชื่อ: " + student1.stdName + "\n" +
        "สาขา: " + student1.dept + "\n" +
        "คณะ: " + student1.fac + "\n" +
        "สถานะ: " + student1.study();

    // แก้จาก showResult เป็น display
    display(result);
}