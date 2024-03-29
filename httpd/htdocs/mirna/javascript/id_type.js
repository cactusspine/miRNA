function fillCategory(upload_number){
//	this function is used to fill the category list on load
	var select_category_id = "Category"+upload_number;
//	alert("select_category_id : "+select_category_id);
	var category_selectbox = document.getElementById(select_category_id);
//	alert("category_selectbox : "+category_selectbox);
/*
	addOption(document.drop_list.Category, "human", "human", "");
	addOption(document.drop_list.Category, "mouse", "mouse", "");
	addOption(document.drop_list.Category, "yeast", "yeast", "");
*/
	addOption(category_selectbox, "human", "human", "");
	addOption(category_selectbox, "mouse", "mouse", "");
	addOption(category_selectbox, "yeast", "yeast", "");

	SelectSubCat(upload_number);
}
function SelectSubCatAll(select_cat_id_full) {
	var reg = new RegExp("Category");
	if (reg.test(select_cat_id_full)) {
//		alert("select_cat_id_full : "+select_cat_id_full);
		select_cat_id = select_cat_id_full.replace("Category", "");
//		alert("from all select_cat_id : "+select_cat_id);
		SelectSubCat(select_cat_id);
	}

}
function SelectSubCat(upload_number){
// ON selection of category this function will work
	var select_sub_cat_id = "SubCat"+upload_number;
//	alert("1.select_sub_cat_id : "+select_sub_cat_id);
	var selectbox = document.getElementById(select_sub_cat_id);
//	alert("selectbox : "+selectbox);
	removeAllOptions(selectbox);
//	addOption(selectbox, "", "SubCat", "");
//	alert("value : "+document.drop_list.Category.value);

	var select_category_id = "Category"+upload_number;
//	alert("select_category_id : "+select_category_id);
	var category_selectbox_value = document.getElementById(select_category_id).value;
//	alert("value : "+category_selectbox_value);	

	if(category_selectbox_value == 'human'){
		addOption(selectbox, "", "---------------------ID Types---------------------");
		addOption(selectbox, "ensembl_gene_id", "Ensembl Gene ID");
                addOption(selectbox, "ensembl_transcript_id", "Ensembl Transcript ID");
                addOption(selectbox, "ensembl_peptide_id", "Ensembl protein ID");
                addOption(selectbox, "agilent_cgh", "Agilent cgh");
                addOption(selectbox, "agilent_probe", "Agilent Probe");
                addOption(selectbox, "embl", "EMBL ID");
                addOption(selectbox, "entrezgene", "EntrezGene ID");
                addOption(selectbox, "go", "GO ID");
                addOption(selectbox, "hgnc_id", "HGNC ID");
                addOption(selectbox, "hgnc_symbol", "HGNC symbol");
                addOption(selectbox, "illumina_v1", "Illumina v1 ID");
                addOption(selectbox, "illumina_v2", "Illumina v2 ID");
                addOption(selectbox, "ipi", "IPI ID");
                addOption(selectbox, "mim_gene_accession", "MIM Gene Accession");
                addOption(selectbox, "mim_morbid_accession", "MIM Morbid Accession");
                addOption(selectbox, "mirbase", "miRBase ID");
                addOption(selectbox, "pdb", "PDB ID");
                addOption(selectbox, "protein_id", "Protein ID");
                addOption(selectbox, "refseq_dna", "Refseq DNA ID");
                addOption(selectbox, "refseq_peptide", "Refseq protein ID");
                addOption(selectbox, "ucsc", "UCSC ID");
                addOption(selectbox, "uniprot_sptrembl", "UniProt/TrEMBL ID");
                addOption(selectbox, "uniprot_swissprot", "UniProt/Swissprot ID");
                addOption(selectbox, "uniprot_swissprot_accession", "UniProt/Swissprot Accession");
                addOption(selectbox, "unigene", "Unigene ID");
                addOption(selectbox, "uniprot_varsplice_id", "UniProt Varsplice ID");
                addOption(selectbox, "hpa_id", "Human Protein Atlas Antibody ID");
                addOption(selectbox, "affy_hc_g110", "Affy hc g110 ID");
                addOption(selectbox, "affy_hg_focus", "Affy hg focus ID");
                addOption(selectbox, "affy_hg_u95a", "Affy hg u95a ID");
                addOption(selectbox, "affy_hg_u95av2", "Affy hg u95av2 ID");
                addOption(selectbox, "affy_hg_u95b", "Affy hg u95b ID");
                addOption(selectbox, "affy_hg_u95c", "Affy hg u95c ID");
                addOption(selectbox, "affy_hg_u95d", "Affy hg u95d ID");
                addOption(selectbox, "affy_hg_u95e", "Affy hg u95e ID");
                addOption(selectbox, "affy_hg_u133a_2", "Affy hg u133a 2 ID");
                addOption(selectbox, "affy_hg_u133a", "Affy hg u133a ID");
                addOption(selectbox, "affy_hg_u133b", "Affy hg u133b ID");
                addOption(selectbox, "affy_hg_u133_plus_2", "Affy hg u133 plus 2 ID");
                addOption(selectbox, "affy_huex", "Affy HuEx");
                addOption(selectbox, "affy_hugene", "Affy HuGene");
                addOption(selectbox, "affy_hugenefl", "Affy hugenefl ID");
                addOption(selectbox, "affy_u133_x3p", "Affy u133 x3p ID");
		addOption(selectbox, "", "------------------Document Types------------------");
		addOption(selectbox, "pdf", "pdf");
		addOption(selectbox, "doc", "doc");
		addOption(selectbox, "excel", "excel");
		addOption(selectbox, "ppt", "ppt");
		addOption(selectbox, "html", "html");
		addOption(selectbox, "ascii", "ascii");
	}
	if(category_selectbox_value == 'mouse'){
		addOption(selectbox, "", "---------------------ID Types---------------------");
                addOption(selectbox, "ensembl_gene_id", "Ensembl Gene ID");
                addOption(selectbox, "ensembl_transcript_id", "Ensembl Transcript ID");
                addOption(selectbox, "ensembl_peptide_id", "Ensembl protein ID");
                addOption(selectbox, "agilent_probe", "Agilent Probe");
                addOption(selectbox, "embl", "EMBL ID");
                addOption(selectbox, "entrezgene", "EntrezGene ID");
                addOption(selectbox, "go", "GO ID");
                addOption(selectbox, "illumina_v1", "Illumina v1 ID");
                addOption(selectbox, "illumina_v2", "Illumina v2 ID");
                addOption(selectbox, "imgt_gene_db", "IMGT gene db ID");
                addOption(selectbox, "imgt_ligm_db", "IMGT/LIGM-DB ID");
                addOption(selectbox, "ipi", "IPI ID");
                addOption(selectbox, "mgi_id", "MGI ID");
                addOption(selectbox, "mgi_symbol", "MGI symbol");
                addOption(selectbox, "mirbase", "miRBase ID");
                addOption(selectbox, "pdb", "PDB ID");
                addOption(selectbox, "protein_id", "Protein ID");
                addOption(selectbox, "refseq_dna", "Refseq DNA ID");
                addOption(selectbox, "refseq_peptide", "Refseq protein ID");
                addOption(selectbox, "ucsc", "UCSC ID");
                addOption(selectbox, "uniprot_sptrembl", "UniProt/TrEMBL ID");
                addOption(selectbox, "uniprot_swissprot", "UniProt/Swissprot ID");
                addOption(selectbox, "uniprot_swissprot_accession", "UniProt/Swissprot Accession");
                addOption(selectbox, "unigene", "Unigene ID");
                addOption(selectbox, "uniprot_varsplice_id", "UniProt Varsplice ID");
                addOption(selectbox, "affy_mg_u74a", "Affy mg u74a ID");
                addOption(selectbox, "affy_mg_u74av2", "Affy mg u74av2 ID");
                addOption(selectbox, "affy_mg_u74b", "Affy mg u74b ID");
                addOption(selectbox, "affy_mg_u74bv2", "Affy mg u74bv2 ID");
                addOption(selectbox, "affy_mg_u74c", "Affy mg u74c ID");
                addOption(selectbox, "affy_mg_u74cv2", "Affy mg u74cv2 ID");
                addOption(selectbox, "affy_moe430a", "Affy moe430a ID");
                addOption(selectbox, "affy_moe430b", "Affy moe430b ID");
                addOption(selectbox, "affy_mouse430_2", "Affy mouse430 2 ID");
                addOption(selectbox, "affy_mouse430a_2", "Affy mouse430a 2 ID");
                addOption(selectbox, "affy_mu11ksuba", "Affy mu11ksuba ID");
                addOption(selectbox, "affy_mu11ksubb", "Affy mu11ksubb ID");
                addOption(selectbox, "affy_moex_1_0_st_v1", "Affymetrix Microarray moex 1 0 st v1 ID");
                addOption(selectbox, "affy_mogene_1_0_st_v1", "Affymetrix Microarray mogene 1 0 st v1 ID");
		addOption(selectbox, "", "------------------Document Types------------------");
		addOption(selectbox, "pdf", "pdf");
		addOption(selectbox, "doc", "doc");
		addOption(selectbox, "excel", "excel");
		addOption(selectbox, "ppt", "ppt");
		addOption(selectbox, "html", "html");
		addOption(selectbox, "ascii", "ascii");
	}
	if(category_selectbox_value == 'yeast'){
		addOption(selectbox, "", "---------------------ID Types---------------------");
		addOption(selectbox, "ensembl_gene_id", "Ensembl Gene ID");
                addOption(selectbox, "ensembl_transcript_id", "Ensembl Transcript ID");
                addOption(selectbox, "ensembl_peptide_id", "Ensembl protein ID");
                addOption(selectbox, "embl", "EMBL ID");
                addOption(selectbox, "entrezgene", "EntrezGene ID");
                addOption(selectbox, "go", "GO ID");
                addOption(selectbox, "pdb", "PDB ID");
                addOption(selectbox, "protein_id", "Protein ID");
                addOption(selectbox, "refseq_peptide", "Refseq protein ID");
                addOption(selectbox, "sgd", "Sgd ID");
                addOption(selectbox, "uniprot_sptrembl", "UniProt/TrEMBL ID");
                addOption(selectbox, "uniprot_swissprot", "UniProt/Swissprot ID");
                addOption(selectbox, "uniprot_swissprot_accession", "UniProt/Swissprot Accession");
                addOption(selectbox, "uniprot_varsplice_id", "UniProt Varsplice ID");
                addOption(selectbox, "affy_yeast_2", "Affy yeast 2 ID");
                addOption(selectbox, "affy_yg_s98", "Affy yg s98 ID");
		addOption(selectbox, "", "------------------Document Types------------------");
		addOption(selectbox, "pdf", "pdf");
		addOption(selectbox, "doc", "doc");
		addOption(selectbox, "excel", "excel");
		addOption(selectbox, "ppt", "ppt");
		addOption(selectbox, "html", "html");
		addOption(selectbox, "ascii", "ascii");
	}
}

function removeAllOptions(selectbox) {
//	alert("2.hello i am removing!!!"+selectbox);
//	alert("from removeAllOptions : "+selectbox);
	var i;
		for(i=selectbox.options.length-1;i>=0;i--) {
			//selectbox.options.remove(i);
                	selectbox.remove(i);
		}
}	

function addOption(selectbox, value, text ){
//	alert("from addOption : "+selectbox);
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	if(value=="human"){
                optn.setAttribute("selected","selected");
		
        }
	if(value=="ensembl_gene_id"){
		optn.setAttribute("selected","selected");
	}
	selectbox.options.add(optn);
}
