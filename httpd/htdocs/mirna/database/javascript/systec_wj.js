$(document).ready(function() {
    //hide field and when species selected show the 3rd field set
    $('#humanDatabase').hide();
    $('#mouseDatabase').hide();    
    $('#org').change(function(){
    if($('#org option:selected').val() == "human"){
        $('#humanDatabase').show();
        $('#mouseDatabase').hide();
    }else{
    $('#mouseDatabase').show();
    }
    });
    
    //End hide field and when species selected show the 3rd field set
    //check selectall checkbox and check all the box
    
    $('#selectall').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkboxAll').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkboxAll').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });
    //end select all checkbox
    //add tissue filter
    var tissue = {"tissue" :[{"title":"adrenal gland","id":1,"children":[{"title":"glandular cells","id":49}]},{"title":"appendix","id":2,"children":[{"title":"glandular cells","id":50},{"title":"lymphoid tissue","id":51}]},{"title":"bone marrow","id":3,"children":[{"title":"hematopoietic cells","id":52}]},{"title":"breast","id":4,"children":[{"title":"adipocytes","id":53},{"title":"glandular cells","id":54},{"title":"myoepithelial cells","id":55}]},{"title":"bronchus","id":5,"children":[{"title":"respiratory epithelial cells","id":56}]},{"title":"cerebellum","id":6,"children":[{"title":"cells in granular layer","id":57},{"title":"cells in molecular layer","id":58},{"title":"Purkinje cells","id":59}]},{"title":"cerebral cortex","id":7,"children":[{"title":"endothelial cells","id":60},{"title":"glial cells","id":61},{"title":"neuronal cells","id":62},{"title":"neuropil","id":63}]},{"title":"cervix, uterine","id":8,"children":[{"title":"glandular cells","id":64},{"title":"squamous epithelial cells","id":65}]},{"title":"colon","id":9,"children":[{"title":"endothelial cells","id":66},{"title":"glandular cells","id":67},{"title":"peripheral nerve/ganglion","id":68}]},{"title":"duodenum","id":10,"children":[{"title":"glandular cells","id":69}]},{"title":"epididymis","id":11,"children":[{"title":"glandular cells","id":70}]},{"title":"esophagus","id":12,"children":[{"title":"squamous epithelial cells","id":71}]},{"title":"fallopian tube","id":13,"children":[{"title":"glandular cells","id":72}]},{"title":"gallbladder","id":14,"children":[{"title":"glandular cells","id":73}]},{"title":"heart muscle","id":15,"children":[{"title":"myocytes","id":74}]},{"title":"hippocampus","id":16,"children":[{"title":"glial cells","id":75},{"title":"neuronal cells","id":76}]},{"title":"kidney","id":17,"children":[{"title":"cells in glomeruli","id":77},{"title":"cells in tubules","id":78}]},{"title":"lateral ventricle","id":18,"children":[{"title":"glial cells","id":79},{"title":"neuronal cells","id":80}]},{"title":"liver","id":19,"children":[{"title":"bile duct cells","id":81},{"title":"hepatocytes","id":82}]},{"title":"lung","id":20,"children":[{"title":"macrophages","id":83},{"title":"pneumocytes","id":84}]},{"title":"lymph node","id":21,"children":[{"title":"germinal center cells","id":85},{"title":"non-germinal center cells","id":86}]},{"title":"nasopharynx","id":22,"children":[{"title":"respiratory epithelial cells","id":87}]},{"title":"oral mucosa","id":23,"children":[{"title":"squamous epithelial cells","id":88}]},{"title":"ovary","id":24,"children":[{"title":"follicle cells","id":89},{"title":"ovarian stroma cells","id":90}]},{"title":"pancreas","id":25,"children":[{"title":"exocrine glandular cells","id":91},{"title":"islets of Langerhans","id":92}]},{"title":"parathyroid gland","id":26,"children":[{"title":"glandular cells","id":93}]},{"title":"placenta","id":27,"children":[{"title":"decidual cells","id":94},{"title":"trophoblastic cells","id":95}]},{"title":"prostate","id":28,"children":[{"title":"glandular cells","id":96}]},{"title":"rectum","id":29,"children":[{"title":"glandular cells","id":97}]},{"title":"salivary gland","id":30,"children":[{"title":"glandular cells","id":98}]},{"title":"seminal vesicle","id":31,"children":[{"title":"glandular cells","id":99}]},{"title":"skeletal muscle","id":32,"children":[{"title":"myocytes","id":100}]},{"title":"skin 1","id":33,"children":[{"title":"fibroblasts","id":101},{"title":"keratinocytes","id":102},{"title":"Langerhans","id":103},{"title":"melanocytes","id":104}]},{"title":"skin 2","id":34,"children":[{"title":"epidermal cells","id":105}]},{"title":"small intestine","id":35,"children":[{"title":"glandular cells","id":106}]},{"title":"smooth muscle","id":36,"children":[{"title":"smooth muscle cells","id":107}]},{"title":"soft tissue 1","id":37,"children":[{"title":"adipocytes","id":108},{"title":"chondrocytes","id":109},{"title":"fibroblasts","id":110},{"title":"peripheral nerve","id":111}]},{"title":"soft tissue 2","id":38,"children":[{"title":"adipocytes","id":112},{"title":"chondrocytes","id":113},{"title":"fibroblasts","id":114},{"title":"peripheral nerve","id":115}]},{"title":"spleen","id":39,"children":[{"title":"cells in red pulp","id":116},{"title":"cells in white pulp","id":117}]},{"title":"stomach 1","id":40,"children":[{"title":"glandular cells","id":118}]},{"title":"stomach 2","id":41,"children":[{"title":"glandular cells","id":119}]},{"title":"testis","id":42,"children":[{"title":"cells in seminiferous ducts","id":120},{"title":"Leydig cells","id":121}]},{"title":"thyroid gland","id":43,"children":[{"title":"glandular cells","id":122}]},{"title":"tonsil","id":44,"children":[{"title":"germinal center cells","id":123},{"title":"non-germinal center cells","id":124},{"title":"squamous epithelial cells","id":125}]},{"title":"urinary bladder","id":45,"children":[{"title":"urothelial cells","id":126}]},{"title":"uterus 1","id":46,"children":[{"title":"cells in endometrial stroma","id":127},{"title":"glandular cells","id":128}]},{"title":"uterus 2","id":47,"children":[{"title":"cells in endometrial stroma","id":129},{"title":"glandular cells","id":130}]},{"title":"vagina","id":48,"children":[{"title":"squamous epithelial cells","id":131}]}]
             }      
 $.each(tissue.tissue, function (index, value) {
    $("#tissue").append('<option value="'+value.title+'">'+value.title+'</option>');
});       
 $('#tissue').on('change', function(){
    console.log($(this).val());
    for(var i = 0; i < tissue.tissue.length; i++)
    {
      if(tissue.tissue[i].title == $(this).val())
      {
         $('#cell_type').html('<option value="">-Select a Cell Type-</option>');
         $.each(tissue.tissue[i].children, function (index, value) {
            $("#cell_type").append('<option value="'+value.title+'">'+value.title+'</option>');
        });
      }
    }
});
    
    //end add tissue filter
    //check recommanded checkbox and check/uncheck all the box
    $('#recommanded').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkboxAll').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
            $('.recommanded').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkboxAll').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });
    //end check recommanded checkbox and check/uncheck  all the box
    //check minimum checkbox and check/uncheck all the box
    $('#minimum').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkboxAll').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
            $('.minimum').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkboxAll').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });
    //end check minimum checkbox and check/uncheck  all the box
    //fill the Category for id type
    fillCategory(1);  
    //End_fill the Category for id type 

});
