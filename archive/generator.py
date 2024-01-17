import primary_blocks
import core_blocks
import os

def generator():
    dir_path = os.path.dirname(os.path.realpath(__file__))

    primary_input = input('''what primary block you want?
                        ''')

    if primary_input == "1":
        primary_input = primary_blocks.p1_primary

    output = core_blocks.email_top + primary_input + core_blocks.email_bottom

    path_output = os.path.join(dir_path, "output_template" + ".html")        

    print(path_output)

    with open(path_output, "w") as file:
        file.write(output)
