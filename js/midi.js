  WebMidi.enable(function (err) {

      console.log(WebMidi.inputs);

      var input = WebMidi.getInputByName("MIDI Mix MIDI 1");
      var input2 = WebMidi.getInputByName("Arturia KeyStep 32 MIDI 1");
      var input2 = WebMidi.getInputByName("Midi Through Port-0");


      input2.addListener('noteon', 'all',
        function (e) {
          var ix = e.channel - 1;
            v = selectVideos(ix)[0]
            seek(ix,e.note.number/127.0*v.getDuration())

        }
       ); 
      


      input.addListener('controlchange', "all", function(e) {
        // console.log(e.value);

        // if (e.controller.number>=16 && e.controller.number<=18)
        //   {volume(e.controller.number-16,e.value/127.0*vol_scale;};
        // if (e.controller.number>=24 && e.controller.number<=26)
        //   {volume(e.controller.number-24+3,e.value/127.0*vol_scale;};
        if (e.controller.number>=32 && e.controller.number<=39)
          {speed(e.controller.number-32,e.value/127.0*4.0);};
        if (e.controller.number>=1 && e.controller.number<=9)
          {volume(e.controller.number-1,e.value/127.0*vol_scale);};
      });
    }

    );
