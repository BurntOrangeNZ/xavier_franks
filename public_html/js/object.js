document.addEventListener('alpine:init', () => {
    // Define Alpine data and components here
    Alpine.data('app_data', () => ({
        // Your data properties
        steps: ['Stem', 'Finish', 'Ceiling', 'Bloom', 'Done'],
        current_step: 'Stem',
        finish_types: ['Nickle', 'Brass', 'Black'],
        selected_finish_type: 'Nickle',
        stem_types: ['Floor', 'Ceiling', 'Table'],
        selected_stem_type: '',
        ceiling_types: ['Flat', 'Sloping', ''],
        selected_ceiling_type: 'Flat',
        bloom_types: ['Magnolia', 'Poppy', 'Lotus'],
        selected_bloom_type: 'Magnolia',
        step_display_names: {
            'Stem': 'Stem Options',
            'Finish': 'Satin Finish Options',
            'Ceiling': 'Ceiling Mounting Options',
            'Bloom': 'Bloom Options',
            'Done': 'Selected Options'
        },
        display_instiue: false,

        getStep() {

        },
        next() {
            const currentIndex = this.steps.indexOf(this.current_step);
            if (currentIndex < this.steps.length - 1) {
                this.current_step = this.steps[currentIndex + 1];
            }
            if (this.current_step == 'Ceiling' && this.selected_stem_type != 'Ceiling') {
                this.current_step = 'Bloom';
            }
        },
        back() {
            const currentIndex = this.steps.indexOf(this.current_step);
            if (currentIndex > 0) {
                this.current_step = this.steps[currentIndex - 1];
            } else if (this.selected_stem_type) {
                this.selected_stem_type = false;
            } else {
                document.location = "https://www.xavierfranks.com/"
            }
            if (this.current_step == 'Ceiling' && this.selected_stem_type != 'Ceiling') {
                this.current_step = 'Finish';
            }
        },
        selectorOptions() {
            switch (this.current_step) {
                case 'Stem':
                    return this.stem_types;
                case 'Finish':
                    return this.finish_types;
                case 'Ceiling':
                    return this.ceiling_types;
                case 'Bloom':
                    return this.bloom_types;
                default:
                    return [];
            }
        },
        selectOption(type) {
            switch (this.current_step) {
                case 'Stem':
                    this.selected_stem_type = type;
                    break;
                case 'Finish':
                    this.selected_finish_type = type;
                    break;
                case 'Ceiling':
                    this.selected_ceiling_type = type;
                    break;
                case 'Bloom':
                    this.selected_bloom_type = type;
                    break;
            }
        },
        isSelected(type) {
            switch (this.current_step) {
                case 'Stem':
                    return this.selected_stem_type == type;
                case 'Finish':
                    return this.selected_finish_type == type;
                case 'Ceiling':
                    return this.selected_ceiling_type == type;
                case 'Bloom':
                    return this.selected_bloom_type == type;
            }
        },


        stemTypeImage() {
            return 'img/select_lamp_elements/' + this.selected_stem_type.toLowerCase() + '/step_one_type_of_lamp/' + this.selected_stem_type + '_Step 1.png';
        },

        swatch(type) {
            switch (this.current_step) {
                case 'Stem':
                    return 'img/select_lamp_elements/' + type.toLowerCase() + '/step_one_type_of_lamp/' + type.toLowerCase() + '_step_1.png';
                case 'Finish':
                    return 'img/satin_finish_colour_swatches/' + type + '.png';
                case 'Ceiling':
                    return 'img/select_lamp_elements/ceiling/step_3_ceiling_type/thumbnail/Ceiling_Step_3_' + this.selected_finish_type + '_' + type + '_Thumbnail.png';
                case 'Bloom':
                    return 'img/lamp_heads_blooms/' + this.selected_finish_type + ' ' + type + '.png';
            }
        },

        bigImage() {
            switch (this.current_step) {
                case 'Stem':
                    return this.stemTypeImage(this.selected_stem_type);
                case 'Finish':
                    return 'img/select_lamp_elements/' + this.selected_stem_type.toLowerCase() + '/step_two_satin_finish/' + this.selected_stem_type + '_Step 2_' + this.selected_finish_type + '.png';
                case 'Ceiling':
                    return 'img/select_lamp_elements/ceiling/step_3_ceiling_type/Ceiling_Step 3_' + this.selected_finish_type + '_' + this.selected_ceiling_type + '.png';
                case 'Bloom':
                    return this.bloomImage()

                case 'Done':
                    if (this.display_instiue) {
                        return this.insitueImage();
                    } else {
                        return this.bloomImage();
                    }
            }
        },
        bloomImage() {
            const silly_step = this.selected_stem_type == 'Ceiling' ? '4' : '3';
            let url = 'img/select_lamp_elements/' + this.selected_stem_type.toLowerCase() + '/step_' + silly_step + '_type_of_bloom/' + this.selected_stem_type + '_Step ' + silly_step + '_' + this.selected_finish_type;
            if (this.selected_stem_type == 'Ceiling') {
                url += '_' + this.selected_ceiling_type;
            }
            return url + '_' + this.selected_bloom_type + '.png';
        },
        insitueImage() {
            let stem = this.selected_stem_type;
            if (stem == 'Ceiling') {
                stem = this.selected_ceiling_type + ' Ceiling';
            }
            let url2 = 'img/instiues/' + stem + ' ' + this.selected_finish_type + ' ' + this.selected_bloom_type + '.jpg';
            return url2;
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
