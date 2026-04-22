// 1. การคำนวณราคา (ใช้ Default Parameter vat = 0.07)
const calculatePrice = (price, vat = 0.07) => {
    return price + (price * vat);
};

// 2. การจัดการข้อมูล
const showOrderDetails = () => {
    // สร้างตัวแปรค่าคงที่เก็บข้อมูลลูกค้าและรายการสินค้า
    const customer = "สมน้ำหน้า";
    const productList = ["เสื้อ", "กางเกง", "หมวก"];

    // ฟังก์ชันซ้อนข้างใน (ใช้ Rest Parameter ...items รับค่าสินค้าหลายรายการ)
    const formatMessage = (customerName, ...items) => {
        const totalPrice = 1500; // สมมติราคาสินค้ารวม
        const netPrice = calculatePrice(totalPrice); // เรียกใช้ฟังก์ชันคำนวณยอดสุทธิ

        // 3. การแสดงผล (ใช้ Template Literals ในการแทรกตัวแปร)
        return `เรียนคุณ ${customerName},<br>
                คุณได้ทำการสั่งซื้อสินค้าจำนวนทั้งหมด ${items.length} รายการ<br>
                ยอดชำระสุทธิ (รวมภาษีมูลค่าเพิ่ม 7%) คือ ${netPrice} บาท`;
    };

    // ส่งข้อความไปแสดงผลใน HTML ดึงผ่าน id="output"
    document.getElementById("output").innerHTML = formatMessage(customer, ...productList);
};