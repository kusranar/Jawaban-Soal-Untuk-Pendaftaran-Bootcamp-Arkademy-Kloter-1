<?php

// Koneksi dengan mysql
$conn = mysqli_connect("localhost", "root","", "gudangDB");

// query mysql
$query = "SELECT categories.category_id, categories.name AS category_name, GROUP_CONCAT(products.name) AS products
FROM categories INNER JOIN products ON categories.category_id = products.category_id
GROUP BY category_id";

$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Nomer 7</title>

	<!-- CSS Bootstrap -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>

	<h1>PRODUCTS</h1>
	<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
	<table class="table">
	  <thead class="thead-dark">
	    <tr>
	      <th scope="col">ID</th>
	      <th scope="col">Category Name</th>
	      <th scope="col">Products</th>
	    </tr>
	  </thead>
	  <tbody>
	  	<?php while($row = mysqli_fetch_assoc($result)) : ?>
	    <tr>
	      <th scope="row"><?= $row["category_id"]; ?></th>
	      <td><?= $row["category_name"]; ?></td>
	      <td><?= $row["products"] ?></td>
	    </tr>
		<?php endwhile; ?>
	  </tbody>
	</table>

<!-- Javascript Bootstrap -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<!-- Javascript JQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<!-- Javascript Popper -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
</body>
</html>