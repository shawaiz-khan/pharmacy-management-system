/* eslint-disable no-undef */
const { spawn } = require('child_process');
const path = require('path');

const submitContact = (req, res) => {
    const { name, email, message, copy } = req.body;
    const copyValue = copy ? '1' : '0';

    console.log('Received data:', { name, email, message, copy: copyValue });

    const cppPath = path.resolve(__dirname, '../cpp-backend/contact-submission');
    const cppProcess = spawn(cppPath, [name, email, message, copyValue]);

    cppProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    cppProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    cppProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) {
            res.status(200).send('Message sent');
        } else {
            res.status(500).send('Error sending message');
        }
    });
};

module.exports = {
    submitContact
};
