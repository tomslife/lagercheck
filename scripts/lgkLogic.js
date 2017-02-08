// JavaScript Document

	var lgkCompatibility = [
	[0,0,0],
	//  1-1 :    Explosive Stoffe
	[0,1,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,"1","Explosive Gefahrstoffe"],
	//  2-2 A:   Gase
	[0,10,1,1,10,10,10,10,10,10,10,1,10,10,10,10,10,10,10,1,0,10,1,0,0,1,"2 A","Gase"],
	//  3-2B:    Aerosole
	[0,10,1,0,0,10,10,10,10,10,10,1,10,0,0,0,0,10,10,0,0,0,0,0,0,0,"2 B","Aerosole"],
	//  4-3:     Entzündbare Flüssige
	[0,10,10,0,0,10,10,10,10,10,1,10,10,0,10,0,1,10,10,0,0,0,1,0,0,1,"3","Entzündbare Flüssigkeiten"],
	//  5-4.1 A: Sonstige explosionsgefährliche
	[0,10,10,10,10,1,1,10,10,10,10,10,1,10,10,10,10,10,10,1,1,1,1,1,1,1,"4.1 A","Sonstige explosionsgefährliche Gefahrstoffe"],
	//  6-4.1 B: Entzündbare fest oder desensibilisierte Stoffe
	[0,10,10,10,10,1,0,1,1,10,1,10,1,1,10,0,1,10,10,0,0,0,0,0,0,0,"4.1 B","Entzündbare feste Gefahrstoffe"],
	//  7-4.2:   Selbstentzündliche Stoffe
	[0,10,10,10,10,10,1,0,1,10,10,10,10,10,10,1,1,10,10,1,1,1,1,0,0,1,"4.2","Pyrophore oder selbsterhitzungsfähige Gefahrstoffe"],
	//  8-4.3:   Stoffe, die in Berührung mit Wasser entzündliche Gase bilden
	[0,10,10,10,10,10,1,1,0,10,10,10,10,10,10,1,1,10,10,1,1,1,1,1,0,1,"4.3","Gefahrstoffe, die in Berührung mit Wasser entzündbare Gase entwickeln"],
	//  9-5.1 A: Stark oxidierend wirkende Stoffe
	[0,10,10,10,10,10,10,10,10,0,0,10,10,10,10,10,10,10,10,10,10,10,10,0,0,10,"5.1 A","Stark oxidierende Gefahrstoffe"],
	// 10-5.1 B: Oxidierend wirkende Stoffe
	[0,10,10,10,1,10,1,10,10,0,0,1,10,1,1,1,1,10,10,1,0,1,1,0,0,1,"5.1 B","Oxidierende Gefahrstoffe"],
	// 11-5.1 C: Ammoniumnitrat und ammoniumnitrathaltige Stoffe
	[0,10,1,1,10,10,10,10,10,10,1,1,10,10,10,10,10,10,10,1,1,1,1,1,1,1,"5.1 C","Ammoniumnitrat und ammoniumnitrathaltige Zubereitungen"],
	// 12-5.2:   Organische Peroxide und selbstzersetzliche Stoffe
	[0,10,10,10,10,1,1,10,10,10,10,10,0,10,10,10,10,10,10,10,10,1,1,0,0,1,"5.2","Organische Peroxide und selbstzersetzliche Gefahrstoffe"],
	// 13-6.1 A: Brennbare akut giftige Stoffe
	[0,10,10,0,0,10,1,10,10,10,1,10,10,0,0,0,0,10,10,0,0,0,1,0,0,1,"6.1 A","Brennbare, akut toxische Kat. 1 und 2 / sehr giftige Gefahrstoffe"],
	// 14-6.1 B: Nichtbrennbare akut giftige Stoffe
	[0,10,10,0,10,10,10,10,10,10,1,10,10,0,0,0,0,10,10,0,0,0,1,0,0,1,"6.1 B","Nicht brennbare, akut toxische Kat. 1 und 2 / sehr giftige Gefahrstoffe"],
	// 15-6.1 C: Brennbare giftige oder chronisch wirkende Stoffe
	[0,10,10,0,0,10,0,1,1,10,1,10,10,0,0,0,0,10,10,0,0,0,0,0,0,0,"6.1 C","Brennbare, akut toxische Kat. 3 / giftige oder chronisch wirkende Gefahrstoffe"],
	// 16-6.1 D: Nichtbrennbare giftige oder chronisch wirkende Stoffe
	[0,10,10,0,1,10,1,1,1,10,1,10,10,0,0,0,0,10,10,0,0,0,0,0,0,0,"6.1 D","Nicht brennbare, akut toxische Kat. 3 / giftige oder chronisch wirkende Gefahrstoffe"],
	// 17-6.2:   Ansteckungsgefährliche Stoffe
	[0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,10,10,10,10,10,10,10,10,"6.2","Ansteckungsgefährliche Stoffe"],
	// 18-7:     Radioaktive Stoffe
	[0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,1,10,10,10,10,10,10,10,"7","Radioaktive Stoffe"],
	// 19-8 A:   Brennbare ätzende Stoffe
	[0,10,1,0,0,1,0,1,1,10,1,1,10,0,0,0,0,10,10,0,0,0,0,0,0,0,"8 A","Brennbare ätzende Gefahrstoffe"],
	// 20-8 B:   Nichtbrennbare ätzende Stoffe
	[0,10,0,0,0,1,0,1,1,10,0,1,10,0,0,0,0,10,10,0,0,0,0,0,0,0,"8 B","Nicht brennbare ätzende Gefahrstoffe"],
	// 21-10:    Brennbare Flüssigkeiten, soweit nicht LGK 3
	[0,10,10,0,0,1,0,1,1,10,1,1,1,0,0,0,0,10,10,0,0,0,0,0,0,0,"10","Brennbare Flüssigkeiten"],
	// 22-11:    Brennbare Feststoffe
	[0,10,1,0,1,1,0,1,1,10,1,1,1,1,1,0,0,10,10,0,0,0,0,0,0,0,"11","Brennbare Feststoffe"],
	// 23-12:    Nichtbrennbare Flüssigkeiten
	[0,10,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,10,10,0,0,0,0,0,0,0,"12","Nicht brennbare Flüssigkeiten"],
	// 24-13:    Nichtbrennbare Feststoffe
	[0,10,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,10,10,0,0,0,0,0,0,0,"13","Nicht brennbare Feststoffe"],
	// 25-10-13: Sonstige brennbare und nichtbrennbare Stoffe
	[0,10,1,0,1,1,0,1,1,10,1,1,1,1,1,0,0,10,10,0,0,0,0,0,0,0,"10-13","Sonstige brennbare und nichtbrennbare Gefahrstoffe"]
	
	];





	// alert(lgkCompatibility[13] [25]);
