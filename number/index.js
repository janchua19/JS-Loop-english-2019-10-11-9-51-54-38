x = "odd";
for(var i = 0; i <= 20; i++){
    if(i == 0)
	{
		continue;
	}
	else if(i%2 == 0)
	{
		x = " is even number.";
	}
	else
	{
		x = " is odd number.";
	}
	console.log(i + x );
}