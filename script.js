
function callEmergency() {
    alert("If you are in danger, contact emergency services.");
    window.location.href = "tel:112";
}

function shareLocation() {
    if (!navigator.geolocation) {
        alert("Location is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const link = `https://www.google.com/maps?q=${lat},${lon}`;

            if (navigator.share) {
                navigator.share({
                    title: "My Current Location",
                    text: "Please check my location.",
                    url: link
                });
            } else {
                navigator.clipboard.writeText(link);
                alert("Location link copied. Share it with someone you trust.");
            }
        },
        function() {
            alert("Please allow location access.");
        }
    );
}
