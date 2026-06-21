<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BMW | Ultimate Driving Machine</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#000;
    color:#fff;
    overflow-x:hidden;
}

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 60px;
    background:rgba(0,0,0,0.7);
    backdrop-filter:blur(10px);
    z-index:1000;
}

.logo{
    font-size:2rem;
    font-weight:bold;
    color:#00AEEF;
}

nav a{
    color:#fff;
    text-decoration:none;
    margin-left:30px;
    transition:.3s;
}

nav a:hover{
    color:#00AEEF;
}

.hero{
    height:100vh;
    background:url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')
    center/cover no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    position:relative;
}

.hero::before{
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.55);
}

.hero-content{
    position:relative;
    z-index:1;
}

.hero h1{
    font-size:5rem;
    text-transform:uppercase;
    letter-spacing:5px;
}

.hero p{
    margin-top:20px;
    font-size:1.3rem;
    color:#ddd;
}

.btn{
    display:inline-block;
    margin-top:30px;
    padding:15px 40px;
    background:#00AEEF;
    color:#fff;
    text-decoration:none;
    border-radius:30px;
    transition:.3s;
}

.btn:hover{
    background:#fff;
    color:#000;
}

.models{
    padding:100px 10%;
}

.section-title{
    text-align:center;
    font-size:3rem;
    margin-bottom:50px;
}

.car-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.card{
    background:#111;
    border-radius:15px;
    overflow:hidden;
    transition:.4s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:250px;
    object-fit:cover;
}

.card-content{
    padding:20px;
}

.card h3{
    margin-bottom:10px;
}

.card p{
    color:#bbb;
}

footer{
    text-align:center;
    padding:30px;
    background:#111;
    margin-top:50px;
}
</style>
</head>
<body>

<header>
    <div class="logo">BMW</div>

    <nav>
        <a href="#">Home</a>
        <a href="#">Models</a>
        <a href="#">Technology</a>
        <a href="#">Contact</a>
    </nav>
</header>

<section class="hero">
    <div class="hero-content">
        <h1>BMW</h1>
        <p>The Ultimate Driving Machine</p>
        <a href="#" class="btn">Explore Models</a>
    </div>
</section>

<section class="models">
    <h2 class="section-title">Featured Models</h2>

    <div class="car-grid">

        <div class="card">
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200" alt="">
            <div class="card-content">
                <h3>BMW M4 Competition</h3>
                <p>High-performance luxury coupe with thrilling power.</p>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200" alt="">
            <div class="card-content">
                <h3>BMW i8</h3>
                <p>Future-focused hybrid sports car with iconic design.</p>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200" alt="">
            <div class="card-content">
                <h3>BMW X7</h3>
                <p>Luxury SUV offering unmatched comfort and technology.</p>
            </div>
        </div>

    </div>
</section>

<footer>
    <p>© 2026 BMW Branding Concept | Designed with HTML, CSS & JavaScript</p>
</footer>

<script>
document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".models").scrollIntoView({
        behavior:"smooth"
    });
});
</script>

</body>
</html>