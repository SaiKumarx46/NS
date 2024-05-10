namespace sai;
using {
    managed
} from '@sap/cds/common';

entity student:managed{
    key sid:String @readonly;
    sname:String;
    city:String;
    studtobooks:Composition of many Books on studtobooks.bookstostud = $self;
    
} 

  entity Books {
        key ID : UUID;
        key sid : String;
        title : String(100);
        author : String(100);
        pages : Integer;
        // Define a computed property named total_pages
        @Core.Computed
        total_pages : Integer @ReadOnly;
        bookstostud:Association to one student on bookstostud.sid = sid;
    }





