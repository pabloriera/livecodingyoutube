  WebMidi.enable(function (err) {

      console.log(WebMidi.inputs);

      var input = WebMidi.getInputByName("MIDI Mix MIDI 1");

      input.addListener('controlchange', "all", function(e) {
        console.log(e.value);
        if (e.controller.number>=16 && e.controller.number<=18)
          {volume(e.controller.number-16,e.value/127.0*100.0);};
        if (e.controller.number>=24 && e.controller.number<=26)
          {volume(e.controller.number-24+3,e.value/127.0*100.0);};
        if (e.controller.number>=32 && e.controller.number<=34)
          {volume(e.controller.number-32+6,e.value/127.0*100.0);};
        if (e.controller.number>=1 && e.controller.number<=9)
          {volume(e.controller.number-1,e.value/127.0*100.0);};
      });
    }

    );
