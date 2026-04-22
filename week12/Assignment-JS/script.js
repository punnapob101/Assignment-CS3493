function task1() {
  let student = {
    name: "ปุณณภพ รุ่งวัฒนภักดิ์",
    scores: [80, 65, 40],
    calculateAverage: function () {
      // ปรับปรุงโดยใช้ .reduce() เพื่อให้รองรับจำนวนคะแนนที่เปลี่ยนแปลงได้
      const total = this.scores.reduce((sum, score) => sum + score, 0);
      return total / this.scores.length;
    },
    getGrade: function () {
      let avg = this.calculateAverage(); // เรียกใช้เมธอดคำนวณเฉลี่ยภายในตัวเอง 
      if (avg >= 80) {
        return "A";
      } else if (avg >= 70) {
        return "B";
      } else if (avg >= 60) {
        return "C";
      } else if (avg >= 50) {
        return "D";
      } else {
        return "F";
      }
    }
  };
  display(student);
}

function display(student) {
  const resultElement = document.getElementById('result');
  const average = student.calculateAverage();
  const grade = student.getGrade();

  const outputText = `ชื่อ: ${student.name}\nคะแนน: ${student.scores.join(', ')}\nคะแนนเฉลี่ย: ${average.toFixed(2)}\nเกรดที่ได้: ${grade}`;

  resultElement.textContent = outputText;
}

function task2() {
  function sphereCalculator(radius) {
    let volume = (4 / 3) * Math.PI * (radius ** 3);
    let formattedNum = new Intl.NumberFormat().format(volume.toFixed(2));

    return formattedNum;
  }
  const radius = 20;
  const volume = sphereCalculator(radius);
  const resultElement = document.getElementById('result');
  resultElement.textContent = `ปริมาตรของทรงกลมที่มีรัศมี ${radius} คือ ${volume} ลูกบาศก์หน่วย`;
}

let warehouse = {
  products: [
    { name: "Laptop", price: 10, stock: 5 },
    { name: "Mouse", price: 10, stock: 10 }
  ],

  addItem: function (itemName, amount) {
    let item = this.products.find(n => n.name === itemName);
    if (item) {
      item.stock += amount;
      return "เพิ่มสต๊อก " + itemName + " อีก " + amount + " ชิ้นเรียบร้อย (รวมทั้งหมด: " + item.stock + " ชิ้น)";
    } else {
      this.products.push({ name: itemName, price: 0, stock: amount });
      return "เพิ่มสินค้าใหม่: " + itemName + " จำนวน " + amount + " ชิ้นเรียบร้อย";
    }
  },

  sellItem: function (itemName, amount) {
    let item = this.products.find(n => n.name === itemName);
    if (item) {
      if (amount > item.stock) {
        alert("สินค้าไม่พอ");
        return "ทำรายการไม่สำเร็จ: สินค้าไม่พอ";
      } else {
        item.stock -= amount;
        return "ขาย " + itemName + " จำนวน " + amount + " ชิ้นเรียบร้อย";
      }
    } else {
      return "ไม่พบสินค้าชื่อ: " + itemName;
    }
  },

  getTotalValue: function () {
    let total = 0;
    this.products.forEach(p => {
      total += p.price * p.stock;
    });
    return new Intl.NumberFormat().format(total);
  }
};

function task3() {

  let action = prompt("เลือกการทำงาน: 1.เพิ่มสินค้า 2.ขายสินค้า 3.ดูมูลค่ารวม");
  const resultElement = document.getElementById("result");

  if (action === "1") {
    let name = prompt("ระบุชื่อสินค้า:");
    let qty = parseInt(prompt("ระบุจำนวนที่เพิ่ม:"));
    resultElement.innerHTML = warehouse.addItem(name, qty);
  } else if (action === "2") {
    let name = prompt("ระบุชื่อสินค้า:");
    let qty = parseInt(prompt("ระบุจำนวนที่ขาย:"));
    resultElement.innerHTML = warehouse.sellItem(name, qty);
  } else if (action === "3") {
    resultElement.innerHTML = "มูลค่ารวมในคลัง: " + warehouse.getTotalValue() + " บาท";
  } else {
    resultElement.innerHTML = "เลือกการทำงานไม่ถูกต้อง";
  }
}

function calculateFine(dueDateStr, returnDateStr) {
  let returnDate = new Date(returnDateStr);
  let dueDate = new Date(dueDateStr);

  let diffInMs = returnDate - dueDate;
  let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays > 0) {

    let daysLate = Math.ceil(diffInDays);
    let fine = daysLate * 5;

    return "เลยกำหนดมาแล้ว " + daysLate + " วัน ค่าปรับรวม " + fine + " บาท";
  } else {
    return "ยังไม่เกินกำหนดส่ง (ไม่มีค่าปรับ)";
  }
}

function task4() {
  let dueDate = prompt("กรุณาระบุวันที่กำหนดส่ง (รูปแบบ: YYYY-MM-DD):");
  let returnDate = prompt("กรุณาระบุวันที่นำมาคืน (รูปแบบ: YYYY-MM-DD):");

  if (dueDate && returnDate) {
    let result = calculateFine(dueDate, returnDate);
    document.getElementById("result").textContent = result;
  }
}

function task5() {
  let userages = prompt("กรุณากรอกอายุ:");
  let ageInt = parseInt(userages);

  if (ageInt < 20) {
    alert("อายุไม่ถึงเกณฑ์");
  } else if (ageInt >= 20) {
    let idCard = confirm("คุณมีบัตรประชาชนมั้ย");
    if (idCard) {
      alert("ยินดีต้อนรับเข้าสู่ระบบ");
    } else {
      alert("กรุณาแสดงบัตรประชาชนเพื่อเข้าสู่ระบบ");
    }
  } else {
    alert("กรุณากรอกอายุให้ถูกต้อง");
  }
}

function task6() {
  let productprice = prompt("กรุณากรอกราคาสินค้า");
  let price = parseFloat(productprice);
  let discount = confirm("คุณมีส่วนลด 100 บาทมั้ย");
  if (discount) {
    price -= 100;
  }
  if (price < 0) price = 0;
  let vat = price * 0.07;
  let totalPrice = price + vat;
  alert(
    "ราคาก่อน VAT: " + price.toFixed(2) + " บาท\n" +
    "ราคาสุทธิ (รวม VAT 7%): " + totalPrice.toFixed(2) + " บาท"
  );

}

function task7() {
  let coffee = prompt("กรุณาเลือกกาแฟ: 1.Latte 2.Espresso");
  let price = 0;
  let coffeeName = "";

  if (coffee === "Latte" || coffee == "latte") {
    price = 50;
    coffeeName = "Latte";
  } else if (coffee == "Espresso" || coffee == "espresso") {
    price = 40;
    coffeeName = "Espresso";
  } else {
    alert("ขออภัย กรุณาเลือกกาแฟที่มีให้เลือกเท่านั้น");
    return;
  }

  let ice = confirm("รับแบบเย็น (+10 บาท) หรือไม่?");
  if (ice) {
    price += 10;
  }
  alert("คุณได้เลือก " + coffeeName + " ราคา " + price + " บาท");
}