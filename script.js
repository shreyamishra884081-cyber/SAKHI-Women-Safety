
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

/* ===== EMERGENCY HELPLINE CENTRE ===== */

.helpline-section {
    padding: 70px 8%;
    background: linear-gradient(135deg, #fff0f6, #f5edff);
    color: #392b40;
}

.helpline-header {
    text-align: center;
    margin-bottom: 40px;
}

.helpline-header span {
    color: #c04486;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
}

.helpline-header h2 {
    font-size: 35px;
    color: #762e68;
    margin: 12px 0;
}

.helpline-header p {
    color: #756879;
    line-height: 1.6;
}

.helpline-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.helpline-card {
    background: white;
    padding: 28px 22px;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(100, 40, 90, 0.09);
    transition: 0.3s ease;
}

.helpline-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 25px rgba(100, 40, 90, 0.16);
}

.helpline-icon {
    font-size: 38px;
    margin-bottom: 12px;
}

.helpline-card h3 {
    color: #773b70;
    font-size: 19px;
}

.helpline-card p {
    color: #756879;
    font-size: 14px;
    line-height: 1.6;
    min-height: 45px;
}

.helpline-card a {
    display: inline-block;
    background: #873c79;
    color: white;
    padding: 12px 22px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 12px;
    transition: 0.3s;
}

.helpline-card a:hover {
    background: #b74b91;
    transform: scale(1.05);
}

.helpline-note {
    text-align: center;
    color: #853b79;
    font-weight: bold;
    margin-top: 35px;
}

@media (max-width: 900px) {
    .helpline-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .helpline-container {
        grid-template-columns: 1fr;
    }

    .helpline-header h2 {
        font-size: 27px;
    }

    .helpline-section {
        padding: 45px 5%;
    }
}

/* ===== END HELPLINE CSS ===== */
