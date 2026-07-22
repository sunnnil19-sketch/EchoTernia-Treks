const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}, 3000);// EchoTernia Treks - Form Handling & WhatsApp Integration

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('.booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault(); // पेज को रिफ़्रेश होने से रोकता है

            // 1. फॉर्म से डेटा इकट्ठा करना
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const trekSelect = document.getElementById('trek');
            const trekName = trekSelect.options[trekSelect.selectedIndex].text;
            const date = document.getElementById('date').value;
            
            const male = parseInt(document.getElementById('male').value) || 0;
            const female = parseInt(document.getElementById('female').value) || 0;
            const child = parseInt(document.getElementById('child').value) || 0;
            const totalMembers = male + female + child;

            const message = document.getElementById('message').value;

            // कम से कम 1 सदस्य चुनना अनिवार्य है
            if (totalMembers === 0) {
                alert('कृपया कम से कम 1 सदस्य (Member) ज़रूर चुनें।');
                return;
            }

            // 2. WhatsApp मैसेज तैयार करना
            const whatsappNumber = "918894444201"; // ⚠️ यहाँ अपना 10-अंकों का असली WhatsApp नंबर डालें (बिना + के)

            const textMessage = `*New Trek Booking Request - EchoTernia* 🏔️%0A%0A` +
                `*Name:* ${name}%0A` +
                `*Phone:* ${phone}%0A` +
                `*Email:* ${email}%0A` +
                `*Trek Name:* ${trekName}%0A` +
                `*Date:* ${date}%0A` +
                `----------------------------%0A` +
                `*Members Breakdown:*%0A` +
                `• Male: ${male}%0A` +
                `• Female: ${female}%0A` +
                `• Children: ${child}%0A` +
                `*Total Travelers:* ${totalMembers}%0A` +
                `----------------------------%0A` +
                `*Special Requests:* ${message ? message : 'None'}`;

            // 3. WhatsApp लिंक खोलना
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${textMessage}`;
            
            // नए टैब में WhatsApp खोलें
            window.open(whatsappURL, '_blank');
        });
    }
});