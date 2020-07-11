Contact = require('./contactModel');

exports.index = function(req, res) {
    console.log('Id is here for test data ', req.query);
    Contact.get(function(err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.new = function(req, res) {
    console.log('req is here ', req);
    var contact = new Contact();
    contact.firstName = req.body.firstName ? req.body.firstName : contact.firstName;
    contact.lastName = req.body.lastName;
    contact.mail = req.body.mail;
    contact.position = req.body.position;
    contact.qualification = req.body.qualification
    contact.resume = req.body.resume
    contact.salutation = req.body.salutation
    console.log('Contact is here for test ', req.body);
    console.log('contact is here for test --', contact);
    contact.save(function(err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};


exports.view = function(req, res) {

    Contact.findById(req.params.contact_id, function(err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

exports.byEmail = function(req, res) {
    console.log(req.params);
    Contact.find({ mail: req.params.emailId }, function(err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};


exports.update = function(req, res) {
    Contact.findById(req.params.contact_id, function(err, contact) {
        if (err)
            res.send(err);
        contact.firstName = req.body.firstName ? req.body.firstName : contact.firstName;
        contact.lastName = req.body.lastName;
        contact.mail = req.body.mail;
        contact.position = req.body.position;
        contact.qualification = req.body.qualification
        contact.resume = req.body.resume
        contact.salutation = req.body.salutation
        contact.save(function(err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};


exports.delete = function(req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function(err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};