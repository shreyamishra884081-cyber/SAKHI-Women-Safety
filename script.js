
function callEmergency() {
    const confirmCall = confirm(
        "Do you want to call emergency number 112?"
    );

    if (confirmCall) {
        window.location.href = "tel:112";
    }
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

            const link =
                `https://www.google.com/maps?q=${lat},${lon}`;

            if (navigator.share) {
                navigator.share({
                    title: "My Current Location",
                    text: "Please check my location.",
                    url: link
                });
            } else {
                navigator.clipboard.writeText(link);
                alert("Location link copied!");
            }
        },
        function() {
            alert("Please allow location access.");
        }
    );
}

function findNearbyPolice() {
    if (!navigator.geolocation) {
        alert("Location is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const mapsLink =
                `https://www.google.com/maps/search/police+station/@${lat},${lon},14z`;

            window.open(mapsLink, "_blank");
        },
        function() {
            alert("Please allow location access to find nearby police stations.");
        }
    );
}

function findNearbyHospital() {
    if (!navigator.geolocation) {
        alert("Location is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const mapsLink =
                `https://www.google.com/maps/search/hospitals/@${lat},${lon},14z`;

            window.open(mapsLink, "_blank");
        },
        function() {
            alert("Please allow location access to find nearby hospitals.");
        }
    );
}

function findNearbyHospital() {
    if (!navigator.geolocation) {
        alert("Location is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const mapsLink =
                `https://www.google.com/maps/search/hospitals/@${lat},${lon},14z`;

            window.open(mapsLink, "_blank");
        },
        function() {
            alert("Please allow location access to find nearby public area.");
        }
    );
}
