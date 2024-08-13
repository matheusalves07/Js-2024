paymentRequest.on('paymentmethod', function(ev) {
    stripe.confirmCardPayment(
      '{{CLIENT_SECRET}}',
      {payment_method: ev.paymentMethod.id},
      {handleActions: false}
    ).then(function(confirmResult) {
      if (confirmResult.error) {
        ev.complete('fail');
      } else {
        ev.complete('success');
        if (confirmResult.paymentIntent.status === "requires_action") {
          stripe.confirmCardPayment(clientSecret).then(
            function(result) {
              if (result.error) {
                // The payment failed --  ask your customer for a new payment method.
              } else {
                // The payment succeede.
              }
            }
          );
        } else {
          // The payment succeeded.
        }
      }
    });
  });