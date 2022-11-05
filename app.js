class App{
    constructor(){
        this.notes = [];
        
        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$noteText = document.querySelector('#note-text');
        this.$formButtons = document.querySelector('#form-buttons');
        this.addEventListeners();
    }
    addEventListeners(){
        document.addEventListener('click',(event)=>{
            this.handleFormClick(event);
            console.log('document clicked')   
                
        });     
        this.$form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const title = this.$noteTitle.value;
            const text = this.$noteText.value;
            if(title&& text){
                //Add note
                this.addNote({title,text});
            }
            
        })
    };
    addNote(note){
        const newNote = {
            title: note.title,
            text: note.text,
            color : 'white',
            id: this.notes.length>0?this.notes[this.notes.length-1].id+1:1
        }
        this.notes = [...this.notes,newNote];
        console.log(this.notes);
    }
    handleFormClick(event){        
        if(this.$form.contains(event.target)){
            console.log('form clicked');
            // Open the form
            this.openForm();
            
        } else {
            // Close the form
            this.closeForm();
        }
    };
    openForm(){
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = "block";
        this.$formButtons.style.display = "block";
    }
    closeForm(){
        this.$form.classList.remove('form-open');
        this.$noteTitle.style.display = "none";
        this.$formButtons.style.display = "none";
    }
}
new App();