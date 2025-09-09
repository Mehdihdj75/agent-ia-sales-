document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const participantId = this.dataset.participant;
    const responses = {};
    
    for (let [key, value] of formData.entries()) {
        responses[key] = value;
    }
    
    // Envoi vers votre webhook Make
    fetch('VOTRE_WEBHOOK_MAKE_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            participant_id: participantId,
            responses: responses,
            submitted_at: new Date().toISOString()
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Merci ! Vos réponses ont été enregistrées.');
        window.location.href = 'merci.html';
    })
    .catch(error => {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    });
});
