from flask import Flask, request, render_template, Response
import core_blocks
import primary_blocks
import secondary_blocks
import tertiary_blocks
import os

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template(
    'home.html', 
    p1_small = primary_blocks.p1_small,
    p1_wide = primary_blocks.p1_wide,
    s1 = secondary_blocks.s1,
    s2 = secondary_blocks.s2,
    s3 = secondary_blocks.s3,
    s4 = secondary_blocks.s4,
    s5 = secondary_blocks.s5,
    s6 = secondary_blocks.s6,
    s7 = secondary_blocks.s7, 
    t2 = tertiary_blocks.t2,
    t3 = tertiary_blocks.t3,
    t_csrequest = tertiary_blocks.t_csrequest,
    t_sccertified = tertiary_blocks.t_sccertified,
    t_inbounddemo = tertiary_blocks.t_inbounddemo,
    t_livewebinars = tertiary_blocks.t_livewebinars,
    t_integrations = tertiary_blocks.t_integrations,
    t_freeseats = tertiary_blocks.t_freeseats
    )
    
@app.route("/download", methods=['GET', 'POST'])
def email_download():
    comp_list = request.form.getlist('component')
    
    main_output = ''.join(comp_list)
    complete_output = core_blocks.email_top + main_output + core_blocks.email_bottom
    
    return Response(
        complete_output,
        mimetype="text",
        headers={"Content-disposition":
            "attachment; filename=template_output.html"} 
    )
        
    
if __name__ == '__main__':
    app.run(debug = True)

