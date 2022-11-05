class App{
    constructor(){
        this.notes = [];
        
        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$noteText = document.querySelector('#note-text');
        this.$notes = document.querySelector('#notes');
        
        this.$formButtons = document.querySelector('#form-buttons');
        this.$placeHolder = document.querySelector('#placeholder');
        this.addEventListeners();
    }
    addEventListeners(){
        document.addEventListener('click',(event)=>{
            this.handleFormClick(event);
            // console.log('document clicked')   
                
        });     
        this.$form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const title = this.$noteTitle.value;
            const text = this.$noteText.value;
            if(title&& text){
                //Add note
                this.addNote({title,text});
            }
            
            this.closeForm();
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
        console.log(this.notes)
        this.displayNotes();
    }
    displayNotes(){
        const hasNotes = this.notes.length > 0;
        
        if(hasNotes){
            this.$placeHolder.style.display = 'none';
        }
        console.log(this.$notes);
        this.$notes.innerHTML = this.notes.map(note => `
        <div style="background: ${note.color};" class="note">
          <div class="${note.title && 'note-title'}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <img class="toolbar-color" src="https://api.iconify.design/fe/palette.svg?rotate=90deg">
              <img class="toolbar-delete" src="https://api.iconify.design/ant-design/delete-outlined.svg">
            </div>
          </div>
        </div>
     `).join("");
     
        

    }
    // To open and close the form handler
    handleFormClick(event){        
        if(this.$form.contains(event.target)){
            // console.log('form clicked');
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
        this.$noteTitle.value = "";
        this.$noteText.value = "";
    }
}
new App();