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
                // The payment failed    --  ask your customer for a new payment method.  ténica de pagmento falido //
                //@result = @ev(Text = AnimationTimeline)// 
              } else {
                
                // Pagamento com sucesso.  
                
              }
            }
          );
        } else {
          // The payment succeeded.  
        }
      }
    });
  });