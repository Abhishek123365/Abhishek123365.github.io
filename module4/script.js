var names=new Array();
names[0]="Yashwant";
names[1]="Jay";
names[2]="Jenning";
names[3]="jagatraj";
names[4]="paul";
names[5]="franklin";
names[6]="larryom";
names[7]="paulas";
names[8]="laurad";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}