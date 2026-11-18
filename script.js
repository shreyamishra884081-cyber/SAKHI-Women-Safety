* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #fff5fa;
    color: #30213d;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #a83270, #713b91);
    color: white;
    text-align: center;
    padding: 25px;
}

header h2 {
    font-size: 32px;
}

header p {
    font-size: 15px;
}

.hero {
    text-align: center;
    padding: 65px 20px;
    background: linear-gradient(135deg, #fce0ef, #eee0ff);
}

.hero h1 {
    font-size: 38px;
    color: #8b2868;
    margin-bottom: 15px;
}

.hero p {
    max-width: 650px;
    margin: 0 auto 25px;
}

button {
    background: #a83270;
    color: white;
    border: none;
    padding: 14px 22px;
    margin: 10px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 15px;
}

button:hover {
    background: #713b91;
}

section {
    padding: 40px 20px;
    text-align: center;
}

section h2 {
    color: #8b2868;
    margin-bottom: 20px;
}

.card {
    display: inline-block;
    background: white;
    width: 260px;
    padding: 25px;
    margin: 12px;
    border-radius: 15px;
    box-shadow: 0 4px 15px #e5c9dc;
    vertical-align: top;
}

.card h3 {
    color: #713b91;
    margin-bottom: 10px;
}

.card a {
    color: #a83270;
    font-weight: bold;
}

.about {
    background: #fce0ef;
}

.about p {
    max-width: 700px;
    margin: auto;
}

footer {
    background: #713b91;
    color: white;
    text-align: center;
    padding: 20px;
}

@media (max-width: 600px) {
    .hero h1 {
        font-size: 29px;
    }

    .card {
        width: 90%;
    }

    button {
        display: block;
        margin: 12px auto;
    }
}
