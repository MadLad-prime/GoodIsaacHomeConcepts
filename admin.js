document.addEventListener("DOMContentLoaded", function() {
    updateSlotOptions();
    document.getElementById("image-category").addEventListener("change", updateSlotOptions);
});

function updateSlotOptions() {
    const category = document.getElementById('image-category').value;
    const slotSelect = document.getElementById('image-slot');
    slotSelect.innerHTML = '';

    const slots = category === 'services' ? 3 : 9;
    for (let i = 0; i < slots; i++) {
        slotSelect.innerHTML += `<option value="${i}">Image ${i + 1}</option>`;
    }
}

function openUploadWidget() {
    const category = document.getElementById('image-category').value;
    const slot = document.getElementById('image-slot').value;

    const cloudName = "dujlwpbrv"; // **Replace with your actual Cloudinary Cloud Name!**
    const uploadPreset = "isaac092"; // **Replace with your actual Cloudinary Upload Preset!**

    if (!window.cloudinary) {
        console.error("Cloudinary script not loaded!");
        alert("Cloudinary script is missing. Check your internet or script URL.");
        return;
    }

    const myWidget = cloudinary.createUploadWidget(
        {
            cloudName: cloudName,
            uploadPreset: uploadPreset,
            sources: ["local", "url"],
            multiple: false,
            cropping: false,
            resourceType: "image",
            maxFileSize: 5000000,
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                const imageUrl = result.info.secure_url;
                const key = `update_${category}_${slot}`;
                localStorage.setItem(key, imageUrl);
                alert("Image uploaded and saved (Cloudinary URL in localStorage).");
                // For now, let's just refresh the page to see the image on index.html
                // We will add displayImage() preview later if needed in admin.html
            } else if (error) {
                console.error("Upload error:", error);
                alert("Upload failed. Please try again.");
            }
        }
    );
    myWidget.open();
}


function clearImages() {
    if (confirm("Are you sure you want to clear all images?")) {
        localStorage.clear();
        alert("All images cleared.");
    }
}
