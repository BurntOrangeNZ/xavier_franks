document.addEventListener('alpine:init', () => {
    // Define Alpine data and components here
    Alpine.data('app_data', () => ({
        // Your data properties
        steps: ['Stem','Finish','Ceiling','Bloom','Done'],
        current_step: 'Stem',
        finish_types : ['Nickle','Brass','Black'],
        selected_finish_type: 'Nickle',
        stem_types: ['Ceiling','Floor','Table'],
        selected_stem_type: '',
        ceiling_types: ['Flat','Sloping'],
        selected_ceiling_type: 'Flat',
        bloom_types: ['Magnolia','Poppy','Lotus'],
        selected_bloom_type: 'Magnolia',

        getStep() {

        },
        confirmStem() {
            this.current_step = 'Finish';
            console.log('Selected stem type:', this.selected_stem_type);
        },
        confirmFinish() {
            this.current_step = this.selected_stem_type == 'Ceiling' ? 'Ceiling' : 'Bloom';
            console.log('Selected stem type:', this.selected_stem_type);
        },
        confirmCeiling() {
            this.current_step = 'Bloom';
            console.log('Selected ceiling type:', this.selected_ceiling_type);
        },
        confirmBloom() {
            this.current_step = 'Done';
            console.log('Selected bloom type:', this.selected_bloom_type);
        },

        selectStemType(type) {
            this.selected_stem_type = type;
            console.log('Selected stem_type:', type);
        },
        selectFinishType(type) {
            this.selected_finish_type = type;
            console.log('Selected finish type:', type);
        },
        selectCeilingType(type) {
            this.selected_ceiling_type = type;
            console.log('Selected ceiling type:', type);
        },
        selectBloomType(type) {
            this.selected_bloom_type = type;
            console.log('Selected bloom type:', type);
        },

        stemTypeImage(type) {
            return 'img/select_lamp_elements/'+type.toLowerCase()+'/step_one_type_of_lamp/'+type+'_Step 1.png';
        },

        finishTypeSwatch(type) {
            return 'img/Satin Finish Colour Swatches/'+type+'.png';
        },
        finishTypeImage()  {
            const url = 'img/select_lamp_elements/'+this.selected_stem_type.toLowerCase()+'/STEP 2 Satin Finish/'+this.selected_stem_type+'_Step 2_'+this.selected_finish_type+'.png';
            console.log('Finish Finish Image: ' + url);
            return url;
        },
        ceilingTypeImage(type) {
            return 'img/select_lamp_elements/ceiling/Step 3 Ceiling Type/Ceiling_Step 3_'+this.selected_finish_type+'_'+this.selected_ceiling_type+'.png';
        },
        bloomImage() {
            const silly_step = this.selected_stem_type == 'Ceiling' ? '4' : '3';
            let url = 'img/select_lamp_elements/'+this.selected_stem_type.toLowerCase()+'/STEP '+silly_step+' Type of Bloom/'+this.selected_stem_type+'_Step '+silly_step+'_'+this.selected_finish_type;
            if (this.selected_stem_type == 'Ceiling') {
                url += '_'+this.selected_ceiling_type;
            }
            url += '_'+this.selected_bloom_type+'.png';
            console.log(url);
            return url;
        },
        bloomHeadImage(type) {
            return 'img/Lamp Heads Blooms/'+this.selected_finish_type+' '+type+'.png';
        },

        doneText() {
            let text = this.selected_bloom_type + ' Bloom on ';
            if (this.selected_stem_type == 'Ceiling') {
                text += this.selected_ceiling_type + ' ';
            }
            text += this.selected_stem_type + ' Mounted Stem with Satin ' + this.selected_finish_type + ' Finish.';
            return text;
        },

        // Your methods
        init() {
            // Code that runs when this component is initialized
            console.log('Alpine component initialized');
            //this.current_step = 'Bloom';
            //this.selected_stem_type = this.stem_types[0];
        }
    }));

});
