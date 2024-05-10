using MyService as service from '../../srv/service';

annotate service.stud with @(
    UI.LineItem : [
        {
            
            $Type : 'UI.DataField',
            Label : 'sname',
            Value : sname,
            
        },
        {
            $Type : 'UI.DataField',
            Label : 'city',
            Value : city,
        },
        {
            $Type : 'UI.DataField',
            Value : sid,
            Label : 'sid',
        },
        {
            $Type : 'UI.DataField',
            Value : createdBy,
        },
    ]
);

annotate service.stud with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'sid',
                Value : sid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'sname',
                Value : sname,
            },
            {
                $Type : 'UI.DataField',
                Label : 'city',
                Value : city,
            },
            {
                $Type : 'UI.DataField',
                Value : createdBy,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'BOOKS',
            ID : 'BOOKS',
            Target : 'studtobooks/@UI.LineItem#BOOKS',
        },
    ]
);
annotate service.stud with @(
    UI.DataPoint #sid : {
        Value : sid,
        Visualization : #Rating,
        TargetValue : 5,
    }
);


annotate service.stud with @(UI.HeaderInfo: {
    Title         : {
        $Type: 'UI.DataField',
        Value: '',
    },
    TypeName      : 'HDFC',
    TypeNamePlural: '',
});



annotate service.stud with @(
    UI.FieldGroup #hjh : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : studtobooks.title,
                Label : 'title',
            },{
                $Type : 'UI.DataField',
                Value : studtobooks.author,
                Label : 'author',
            },{
                $Type : 'UI.DataField',
                Value : studtobooks.ID,
                Label : 'ID',
            },{
                $Type : 'UI.DataField',
                Value : studtobooks.pages,
                Label : 'pages',
            },{
                $Type : 'UI.DataField',
                Value : studtobooks.sid,
                Label : 'sid',
            },{
                $Type : 'UI.DataField',
                Value : studtobooks.total_pages,
                Label : 'total_pages',
            },],
    }
);
annotate service.Books with @(
    UI.LineItem #BOOKS : [
        {
            $Type : 'UI.DataField',
            Value : author,
            Label : 'author',
        },{
            $Type : 'UI.DataField',
            Value : ID,
            Label : 'ID',
        },{
            $Type : 'UI.DataField',
            Value : pages,
            Label : 'pages',
        },{
            $Type : 'UI.DataField',
            Value : sid,
            Label : 'sid',
        },{
            $Type : 'UI.DataField',
            Value : title,
            Label : 'title',
        },{
            $Type : 'UI.DataField',
            Value : total_pages,
            Label : 'total_pages',
        },]
);
