<html>
	<head>
		<title>
			TDI:PAS Data Analysis
		</title>
		<script type="text/javascript" src="overlib.js"><!-- overLIB (c) Erik Bosrup --></script>
	</head>
	<body>
	<div id="overDiv" style="position:absolute; visibility:hidden; z-index:1000;"></div>
	<form action="/cgi-bin/pas.cgi" method="POST">
		<table  cellspacing="0" cellpadding="0" border="0">
<!--
			<tr>
                                <td></td>
                                <td  bgcolor= #336633 width="12">&nbsp;</td>
                                <td></td>
                        </tr>

                        <tr>
                                <td></td>
                                <td  bgcolor= #336633 >
                                        <a href="http://schneider.embl.de/pas/index.html"><img src="images/pas_banner.bmp" alt="pas" name="banner"   border="0" id="banner" align="center"></a>
                                </td>
                                <td></td>
                        </tr>
-->
			<tr>
                                <td  bgcolor= #336633 width="12">&nbsp;</td>
				<td  bgcolor= #336633></td>
				<td></td>
			</tr>
			<tr>
                                <td  bgcolor= #336633 width="12">&nbsp;</td>
				<td  bgcolor= #336633>
					<table  cellspacing="0" cellpadding="0" border="0">
						<tr>
							<td rowspan=2><img src="images/embl.gif" alt="pas" name="banner"   border="0" id="banner" align="center"></td>
							<td  bgcolor= #336633>
                                     				   <p style="font-family:verdana;font-size:160%;color:white">
                                                                	<a style="color:#ffffff;text-decoration:none" href="http://schneider.embl.de/pas/">&nbsp;Target discovery initiative: Premature aging syndromes</a>
                                                                	</p>
                                			</td>
						</tr>
						<tr>
							<td  bgcolor= #336633><p style="font-family:verdana;font-size:100%;color:white">
                                                                <a style="color:#ffffff;text-decoration:none" href="http://schneider.embl.de/pas/">&nbsp;&nbsp;Bioinformatics data collection & analysis</a>
                                                                </p>
			                                </td>
						</tr>
					</table>
				</td>
				<td></td>
			</tr>
                        <tr>
                                <td  bgcolor= #336633 width="12">&nbsp;</td>
                                <td  bgcolor= #336633></td>
                                <td></td>
                        <tr>

                        <tr>
                                <td bgcolor="#FFFFFF" width="12"><br><br></td>
                        </tr>

                        <tr>
                                <td></td>
                                <td><table border="0" cellpadding="0" cellspacing="0" width="800">
                                        <tr>
                                                <td align="left" colspan="2" height="2" rowspan="2" width="2"><img align="middle" alt=" " border="0" height="16" src="images/top_left_gr.gif" width="16"></td>
                                                <td align="left" bgcolor="#336633" height="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="100"></td>
                                                <td align="left" colspan="2" height="2" rowspan="2" width="2"><img align="middle" alt=" " border="0" height="16" src="images/top_right_gr.gif" width="16"></td>
                                        </tr>
                                        <tr>
                                                <td align="left" bgcolor="#FFFFFF" height="12"></td>
                                        </tr>
                                        <tr>
                                                <td bgcolor="#336633" width="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="4"></td>
                                                <td bgcolor="#FFFFFF" width="12">&nbsp;</td>
                                                <td colspan="1"></td>
                                                <td bgcolor="#FFFFFF" width="12">&nbsp;</td>
                                                <td bgcolor="#336633" width="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="4"></td>
                                        </tr>


                                        <tr>
                                                <td bgcolor="#336633" width="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="4"></td>
                                                <td bgcolor="#FFFFFF" width="12">&nbsp;</td>
                                                <td>    <table>
								<tr>
                                                                        <td>	
										<table><tr><td>
											<img src="images/knowledge.jpg" USEMAP="#knowledge" border="0" width='30' height='25'>
											<MAP NAME="knowledge"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=biodb&pos=0&db=biodb&sort=hugo_name&ad=asc" target="_blanck"></MAP></td>
											<td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=biodb&pos=0&db=biodb&sort=hugo_name&ad=asc" target="_blanck" style="text-decoration:none"><b>Knowledge from biological databases</b></a></p></td></tr></table></td>
                                                                </tr>
	
								<tr><td></td></tr>
		
								<tr>
									<td>
										 <table><tr><td>
                                                                                        <img src="images/cluster.jpg" USEMAP="#cluster" border="0" width='30' height='25'>
                                                                                        <MAP NAME="cluster"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=homology_clustering&pos=0&db=homology" target="_blanck"></MAP></td>
                                                                	<td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=homology_clustering&pos=0&db=homology" target="_blanck" style="text-decoration:none"><b>Homology Clustering</b></a></p></td></tr></table></td>        
								</tr>
									
                                                               <tr>
                                                                        <td>
                                                                                <table><tr><td>
                                                                                        <img src="images/orthology.jpg" USEMAP="#orthology" border="0" width='30' height='25'>
                                                                                        <MAP NAME="orthology"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=orthology&pos=0&ortho=orthodb" target="_blanck"></MAP></td>
                                                                        <td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=orthology&pos=0&ortho=orthodb" target="_blanck" style="text-decoration:none"><b>Orthology Information</b></a></p></td></tr></table></td>
                                                                </tr>

								<tr>
                                                                         <td>
                                                                                <table><tr><td>
                                                                                        <img src="images/domain.jpg" USEMAP="#domain" border="0" width='30' height='25'>
                                                                                         <MAP NAME="domain"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=domains&pos=0" target="_blanck"></MAP></td>
                                                                        <td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=domains&pos=0" target="_blanck" style="text-decoration:none"><b>Domain Architecture</b></a></p></td></tr></table></td>
                                                                </tr>
								<tr>
									 <td>
										<table><tr><td>
											<img src="images/structure.jpg" USEMAP="#structure" border="0" width='30' height='25'>
											 <MAP NAME="structure"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=structure&pos=0" target="_blanck"></MAP></td>
									<td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=structure&pos=0" target="_blanck" style="text-decoration:none"><b>Structural Features</b></a></p></td></tr></table></td>
                                                                </tr>

                                                                <tr>
                                                                         <td>
                                                                                <table><tr><td>
                                                                                        <img src="images/pathway.gif" USEMAP="#pathway" border="0" width='30' height='25'>
                                                                                         <MAP NAME="pathway"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=pathway&pos=0" target="_blanck"></MAP></td>
                                                                        <td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=pathway&pos=0" target="_blanck" style="text-decoration:none"><b>Pathway Information</b></a></p></td></tr></table></td>
                                                                </tr>

                                                                <tr>
                                                                         <td>
                                                                                <table><tr><td>
                                                                                        <img src="images/go.jpg" USEMAP="#go" border="0" width='30' height='25'>
                                                                                         <MAP NAME="go"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=go&pos=0" target="_blanck"></MAP></td>
                                                                        <td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=go&pos=0" target="_blanck" style="text-decoration:none"><b>Gene Ontology </b></a></p></td></tr></table></td>
                                                                </tr>

                                                                <tr>
                                                                         <td>
                                                                                <table><tr><td>
                                                                                        <img src="images/interaction.jpg" USEMAP="#interaction" border="0" width='30' height='25'>
                                                                                         <MAP NAME="interaction"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=interaction&pos=0" target="_blanck"></MAP></td>
                                                                        <td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=interaction&pos=0" target="_blanck" style="text-decoration:none"><b>P-P, P-C Interactions </b></a></p></td></tr></table></td>
                                                                </tr>

                                                                <tr>
                                                                         <td>
                                                                                <table><tr><td>
                                                                                        <img src="images/chemistry.png" USEMAP="#chemistry" border="0" width='30' height='25'>
                                                                                         <MAP NAME="chemistry"><area shape="rect" coords="0,0,100,100" href="http://schneider.embl.de/cgi-bin/pas.cgi?section=chemistry&pos=0" target="_blanck"></MAP></td>
                                                                        <td><p style="font-family:verdana;font-size:80%;color:blue"><a href="http://schneider.embl.de/cgi-bin/pas.cgi?section=chemistry&pos=0" target="_blanck" style="text-decoration:none"><b>Chemistry Information </b></a></p></td></tr></table></td>
                                                                </tr>
								<tr><td></td><tr>

							</table>
                                                </td>
                                                <td bgcolor="#FFFFFF" width="12">&nbsp;</td>
                                                <td bgcolor="#336633" width="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="4"></td>
                                        </tr>
                                        <tr>
                                                <td bgcolor="#336633" width="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="4"></td>
                                                <td bgcolor="#FFFFFF" width="12">&nbsp;</td>
                                                <td colspan="1"></td>
                                                <td bgcolor="#FFFFFF" width="12">&nbsp;</td>
                                                <td bgcolor="#336633" width="4"><img align="middle" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="4"></td>
                                        </tr>

                                        <tr>
                                                <td align="left" colspan="2" height="2" rowspan="2" width="2"><img align="middle" alt=" " border="0" height="16" src="images/bottom_left_gr.gif" width="16"></td>
                                                <td align="left" bgcolor="#FFFFFF" height="12"></td>
                                                <td align="left" colspan="2" height="2" rowspan="2" width="2"><img align="middle" alt=" " border="0" height="16" src="images/bottom_right_gr.gif" width="16"></td>
                                        </tr>
                                        <tr>
                                                <td align="bottom" bgcolor="#336633" height="4"><img align="bottom" alt=" " border="0" height="2" src="images/Pixel_gr.gif" width="100"></td>
                                        </tr>
                                </table>
                                </td>
                                <td></td>
                        </tr>
			<tr>
				<td></td>
				<td><br><br><br></td>
				<td></td>
			</tr>
		</table>	
        </body>
</html>


