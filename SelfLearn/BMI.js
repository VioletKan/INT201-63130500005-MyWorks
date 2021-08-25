// ให้ตัวแทนส่งแบบกลุ่มโดยตั้งชื่อกลุ่มว่า INT201_`ชื่อกลุ่มอิงจากชื่อใน MS TEAM` เช่น INT201_S1_Group 11, INT201_S2_Group 11
// และให้ส่งเป็น pdf ไฟล์เดียวมีชื่อว่า INT201_A2_`ชื่อกลุ่มอิงจากชื่อใน MS TEAM`.pdf เช่น INT201_A2_S1_Group 11.pdf [12:21 PM] UMAPORN SUPASITTHIMETHEE
// 3 คะแนน ให้ใช้ let, const เขียนเป็น function ทำข้อมูลทดสอบอย่างน้อย 3 เคส

function BMI(weight, height) {
    let w = weight * 0.453592;
    let h = height * 0.0254;
    const bodymass = w / (h ^ 2);
    return bodymass;
}
BMI(36.5, 39);
console.log(BMI(36.5, 39));

let result = BMI;
if (result < 18.5) {
    console.log('Too Skinny');
} else if (result >= 18.6 && result <= 24) {
    console.log('Normal');
} else if (result >= 25.0 && result <= 29.9) {
    console.log('Fat');
} else {
    console.log('Too Fat');
}