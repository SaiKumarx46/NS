using sai as s1 from '../db/schema';
service MyService {
    @odata.draft.enabled
entity stud as projection on s1.student;

entity Books as projection on s1.Books;


function studh(id : String,sname : String)  returns String;

// view da as select sid,  sname as name,sid+sname as ConcatField:String  from s1.student;

}
